"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Users, Shield, Heart } from "lucide-react"
import { NearbyAukier, Location } from "@/lib/types/african-marketplace"

interface NearbyAukiersProps {
  userLocation?: Location
  maxDistance?: number
  onSelectAukier?: (aukier: NearbyAukier) => void
}

// Mock data - in real app, this would come from API
const mockNearbyAukiers: NearbyAukier[] = [
  {
    id: "1",
    name: "Chisomo Banda",
    phone: "+265 991 234 567",
    title: "Master Plumber",
    skills: ["Plumbing", "Pipe Installation", "Leak Repair"],
    location: {
      id: "1",
      city: "Lilongwe",
      district: "Lilongwe",
      area: "Area 3",
      coordinates: { lat: -13.9626, lng: 33.7741 }
    },
    hourlyRate: 5000,
    currency: "MWK",
    rating: 4.9,
    reviewCount: 127,
    image: "/african-plumber.jpg",
    verified: true,
    trustProfile: {
      phoneVerified: true,
      nationalIdVerified: true,
      addressVerified: true,
      communityEndorsements: [],
      localReferences: [],
      cashTransactionHistory: [],
      familyVouches: [],
      religiousEndorsements: [],
      localBusinessReferences: [],
      communityTrustScore: 95,
      localReputationScore: 88,
      overallTrustScore: 92
    },
    paymentMethods: [],
    availability: {
      monday: [{ start: "08:00", end: "17:00", available: true }],
      tuesday: [{ start: "08:00", end: "17:00", available: true }],
      wednesday: [{ start: "08:00", end: "17:00", available: true }],
      thursday: [{ start: "08:00", end: "17:00", available: true }],
      friday: [{ start: "08:00", end: "17:00", available: true }],
      saturday: [{ start: "08:00", end: "12:00", available: true }],
      sunday: []
    },
    languages: ["Chichewa", "English"],
    portfolio: [],
    services: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    distance: 0.8,
    walkingTime: 10,
    communityConnections: 3
  },
  {
    id: "2",
    name: "Thandiwe Phiri",
    phone: "+265 992 345 678",
    title: "Electrician",
    skills: ["Electrical", "Wiring", "Repairs"],
    location: {
      id: "2",
      city: "Lilongwe",
      district: "Lilongwe",
      area: "Area 4",
      coordinates: { lat: -13.9626, lng: 33.7741 }
    },
    hourlyRate: 6000,
    currency: "MWK",
    rating: 4.8,
    reviewCount: 94,
    image: "/african-electrician.jpg",
    verified: true,
    trustProfile: {
      phoneVerified: true,
      nationalIdVerified: true,
      addressVerified: true,
      communityEndorsements: [],
      localReferences: [],
      cashTransactionHistory: [],
      familyVouches: [],
      religiousEndorsements: [],
      localBusinessReferences: [],
      communityTrustScore: 88,
      localReputationScore: 85,
      overallTrustScore: 87
    },
    paymentMethods: [],
    availability: {
      monday: [{ start: "08:00", end: "17:00", available: true }],
      tuesday: [{ start: "08:00", end: "17:00", available: true }],
      wednesday: [{ start: "08:00", end: "17:00", available: true }],
      thursday: [{ start: "08:00", end: "17:00", available: true }],
      friday: [{ start: "08:00", end: "17:00", available: true }],
      saturday: [{ start: "08:00", end: "12:00", available: true }],
      sunday: []
    },
    languages: ["Chichewa", "English"],
    portfolio: [],
    services: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    distance: 1.2,
    walkingTime: 15,
    communityConnections: 2
  }
]

export function NearbyAukiers({ 
  userLocation, 
  maxDistance = 5, 
  onSelectAukier 
}: NearbyAukiersProps) {
  const [aukiers, setAukiers] = useState<NearbyAukier[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const filteredAukiers = mockNearbyAukiers.filter(aukier => 
        aukier.distance <= maxDistance
      )
      setAukiers(filteredAukiers)
      setLoading(false)
    }, 1000)
  }, [maxDistance])

  const getDistanceColor = (distance: number) => {
    if (distance <= 1) return "text-green-600"
    if (distance <= 2) return "text-yellow-600"
    return "text-orange-600"
  }

  const getTrustLevel = (score: number) => {
    if (score >= 90) return { level: "Excellent", color: "bg-green-100 text-green-800" }
    if (score >= 75) return { level: "Very Good", color: "bg-blue-100 text-blue-800" }
    if (score >= 60) return { level: "Good", color: "bg-yellow-100 text-yellow-800" }
    return { level: "Building", color: "bg-gray-100 text-gray-800" }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Nearby Aukiers</h3>
          <Badge variant="outline">Loading...</Badge>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-4">
              <div className="animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Nearby Aukiers</h3>
        <Badge variant="outline">Within {maxDistance}km</Badge>
      </div>
      
      {aukiers.length === 0 ? (
        <Card className="p-8 text-center">
          <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h4 className="font-medium mb-2">No Aukiers Found Nearby</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Try expanding your search radius or check back later.
          </p>
          <Button variant="outline">Expand Search</Button>
        </Card>
      ) : (
        <div className="space-y-3">
          {aukiers.map((aukier) => {
            const trustLevel = getTrustLevel(aukier.trustProfile.overallTrustScore)
            
            return (
              <Card 
                key={aukier.id} 
                className="cursor-pointer transition-all hover:shadow-md"
                onClick={() => onSelectAukier?.(aukier)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={aukier.image} alt={aukier.name} />
                      <AvatarFallback>
                        {aukier.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium truncate">{aukier.name}</h4>
                        {aukier.verified && (
                          <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">{aukier.title}</p>
                      
                      {/* Distance and Time */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span className={getDistanceColor(aukier.distance)}>
                            {aukier.distance}km away
                          </span>
                        </div>
                        {aukier.walkingTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{aukier.walkingTime}min walk</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Trust and Community */}
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={trustLevel.color} variant="outline">
                          {trustLevel.level}
                        </Badge>
                        {aukier.communityConnections && aukier.communityConnections > 0 && (
                          <Badge variant="outline" className="gap-1">
                            <Users className="h-3 w-3" />
                            {aukier.communityConnections} connections
                          </Badge>
                        )}
                      </div>
                      
                      {/* Rating and Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium">{aukier.rating}</span>
                          <span className="text-sm text-muted-foreground">
                            ({aukier.reviewCount})
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            MWK {aukier.hourlyRate.toLocaleString()}/hr
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
