"use client"

import Link from "next/link"
import { MapPin, Star, Clock, Shield, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AukierTrustBadges } from "@/components/trust/aukier-trust-badges"
import { AukierProfile } from "@/lib/types/african-marketplace"

interface AukierCardProps {
  aukier: AukierProfile
  showContactButton?: boolean
  className?: string
}

export function AukierCard({ aukier, showContactButton = true, className }: AukierCardProps) {
  const isAvailable = () => {
    const now = new Date()
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const day = dayNames[now.getDay()] as keyof typeof aukier.availability
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })
    
    const todaySchedule = aukier.availability[day]
    if (!todaySchedule || todaySchedule.length === 0) return false
    
    return todaySchedule.some(slot => 
      slot.available && 
      currentTime >= slot.start && 
      currentTime <= slot.end
    )
  }

  return (
    <Card className={`hover:shadow-lg transition-all duration-200 cursor-pointer group ${className}`}>
      <Link href={`/aukier/${aukier.id}`}>
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarImage src={aukier.image} alt={aukier.name} />
                <AvatarFallback>
                  {aukier.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              {/* Online Status Indicator */}
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                isAvailable() ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                  {aukier.name}
                </h3>
                {aukier.verified && (
                  <Badge variant="secondary" className="text-xs">
                    <Shield className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-2">{aukier.title}</p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{aukier.rating}</span>
                  <span className="text-muted-foreground">({aukier.reviewCount})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-semibold">{aukier.currency} {aukier.hourlyRate.toLocaleString()}/hr</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Link>
      
      <CardContent className="pt-0">
        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{aukier.location.city}, {aukier.location.area}</span>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {aukier.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {aukier.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{aukier.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-4">
          <AukierTrustBadges trustProfile={aukier.trustProfile} />
        </div>

        {/* Availability Status */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isAvailable() ? 'bg-green-500' : 'bg-gray-400'}`} />
            <span className="text-sm text-muted-foreground">
              {isAvailable() ? 'Available now' : 'Currently busy'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button className="flex-1" size="sm" asChild>
            <Link href={`/aukier/${aukier.id}`}>
              View Profile
            </Link>
          </Button>
          {showContactButton && (
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
