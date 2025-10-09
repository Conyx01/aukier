"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Heart, Building, Church, Plus, CheckCircle, MapPin, Phone } from "lucide-react"
import { CommunityEndorsement, AukierProfile } from "@/lib/types/african-marketplace"

interface CommunityEndorsementsProps {
  aukier: AukierProfile
  onAddEndorsement?: (endorsement: Omit<CommunityEndorsement, 'id' | 'createdAt' | 'verified'>) => void
  showAddButton?: boolean
}

const relationshipTypes = [
  { value: 'neighbor', label: 'Neighbor', icon: Users },
  { value: 'church_member', label: 'Church Member', icon: Church },
  { value: 'business_owner', label: 'Business Owner', icon: Building },
  { value: 'family', label: 'Family Member', icon: Heart },
  { value: 'friend', label: 'Friend', icon: Users }
]

export function CommunityEndorsements({ 
  aukier, 
  onAddEndorsement, 
  showAddButton = true 
}: CommunityEndorsementsProps) {
  const [isAddingEndorsement, setIsAddingEndorsement] = useState(false)
  const [newEndorsement, setNewEndorsement] = useState({
    endorserName: '',
    endorserPhone: '',
    relationship: 'neighbor' as const,
    endorsementText: ''
  })

  const handleSubmitEndorsement = () => {
    if (newEndorsement.endorserName && newEndorsement.endorserPhone && newEndorsement.endorsementText) {
      onAddEndorsement?.(newEndorsement)
      setNewEndorsement({
        endorserName: '',
        endorserPhone: '',
        relationship: 'neighbor',
        endorsementText: ''
      })
      setIsAddingEndorsement(false)
    }
  }

  const getRelationshipIcon = (relationship: string) => {
    const type = relationshipTypes.find(t => t.value === relationship)
    return type ? type.icon : Users
  }

  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case 'family': return 'bg-pink-100 text-pink-800'
      case 'church_member': return 'bg-purple-100 text-purple-800'
      case 'business_owner': return 'bg-blue-100 text-blue-800'
      case 'neighbor': return 'bg-green-100 text-green-800'
      case 'friend': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Community Endorsements
          </CardTitle>
          {showAddButton && (
            <Dialog open={isAddingEndorsement} onOpenChange={setIsAddingEndorsement}>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Endorsement
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Endorse {aukier.name}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="endorserName">Your Name</Label>
                    <Input
                      id="endorserName"
                      value={newEndorsement.endorserName}
                      onChange={(e) => setNewEndorsement(prev => ({ ...prev, endorserName: e.target.value }))}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="endorserPhone">Phone Number</Label>
                    <Input
                      id="endorserPhone"
                      value={newEndorsement.endorserPhone}
                      onChange={(e) => setNewEndorsement(prev => ({ ...prev, endorserPhone: e.target.value }))}
                      placeholder="+265 991 234 567"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Your Relationship</Label>
                    <Select
                      value={newEndorsement.relationship}
                      onValueChange={(value: any) => setNewEndorsement(prev => ({ ...prev, relationship: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {relationshipTypes.map((type) => {
                          const Icon = type.icon
                          return (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                {type.label}
                              </div>
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="endorsementText">Endorsement</Label>
                    <Textarea
                      id="endorsementText"
                      value={newEndorsement.endorsementText}
                      onChange={(e) => setNewEndorsement(prev => ({ ...prev, endorsementText: e.target.value }))}
                      placeholder="Tell others why you recommend this Aukier..."
                      className="min-h-24"
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setIsAddingEndorsement(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleSubmitEndorsement}>
                      Submit Endorsement
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {aukier.trustProfile.communityEndorsements.length === 0 ? (
          <div className="text-center py-8">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-medium mb-2">No Community Endorsements Yet</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Be the first to endorse {aukier.name} and help build trust in the community.
            </p>
            {showAddButton && (
              <Button onClick={() => setIsAddingEndorsement(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add First Endorsement
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {aukier.trustProfile.communityEndorsements.map((endorsement) => {
              const RelationshipIcon = getRelationshipIcon(endorsement.relationship)
              
              return (
                <Card key={endorsement.id} className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {endorsement.endorserName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium">{endorsement.endorserName}</h4>
                        <Badge className={getRelationshipColor(endorsement.relationship)} variant="outline">
                          <RelationshipIcon className="h-3 w-3 mr-1" />
                          {relationshipTypes.find(t => t.value === endorsement.relationship)?.label}
                        </Badge>
                        {endorsement.verified && (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        {endorsement.endorsementText}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {endorsement.endorserPhone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {new Date(endorsement.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
