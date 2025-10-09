"use client"

import { Badge } from "@/components/ui/badge"
import { Phone, Users, MapPin, Shield, Heart, Building, Star } from "lucide-react"
import { AukierTrustProfile } from "@/lib/types/african-marketplace"

interface AukierTrustBadgesProps {
  trustProfile: AukierTrustProfile
  showDetails?: boolean
}

export function AukierTrustBadges({ trustProfile, showDetails = false }: AukierTrustBadgesProps) {
  const getTrustLevel = (score: number) => {
    if (score >= 90) return { level: "Excellent", color: "bg-green-100 text-green-800" }
    if (score >= 75) return { level: "Very Good", color: "bg-blue-100 text-blue-800" }
    if (score >= 60) return { level: "Good", color: "bg-yellow-100 text-yellow-800" }
    return { level: "Building", color: "bg-gray-100 text-gray-800" }
  }

  const trustLevel = getTrustLevel(trustProfile.overallTrustScore)

  return (
    <div className="space-y-3">
      {/* Overall Trust Score */}
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-primary" />
        <span className="font-medium">Trust Score:</span>
        <Badge className={trustLevel.color}>
          {trustProfile.overallTrustScore}/100 - {trustLevel.level}
        </Badge>
      </div>

      {/* Basic Verification */}
      <div className="flex flex-wrap gap-2">
        {trustProfile.phoneVerified && (
          <Badge variant="outline" className="gap-1">
            <Phone className="h-3 w-3" />
            Phone Verified
          </Badge>
        )}
        {trustProfile.nationalIdVerified && (
          <Badge variant="outline" className="gap-1">
            <Shield className="h-3 w-3" />
            ID Verified
          </Badge>
        )}
        {trustProfile.addressVerified && (
          <Badge variant="outline" className="gap-1">
            <MapPin className="h-3 w-3" />
            Address Verified
          </Badge>
        )}
      </div>

      {/* Community Trust Signals */}
      {trustProfile.communityEndorsements.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Users className="h-3 w-3" />
            {trustProfile.communityEndorsements.length} Community Endorsements
          </Badge>
        </div>
      )}

      {trustProfile.localReferences.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Building className="h-3 w-3" />
            {trustProfile.localReferences.length} Local References
          </Badge>
        </div>
      )}

      {trustProfile.familyVouches.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Heart className="h-3 w-3" />
            {trustProfile.familyVouches.length} Family Vouches
          </Badge>
        </div>
      )}

      {trustProfile.cashTransactionHistory.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="gap-1">
            <Star className="h-3 w-3" />
            {trustProfile.cashTransactionHistory.length} Cash Transactions
          </Badge>
        </div>
      )}

      {/* Detailed Trust Breakdown */}
      {showDetails && (
        <div className="mt-4 space-y-2 p-4 bg-muted rounded-lg">
          <h4 className="font-medium text-sm">Trust Breakdown</h4>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Community Trust:</span>
              <span className="font-medium">{trustProfile.communityTrustScore}/100</span>
            </div>
            <div className="flex justify-between">
              <span>Local Reputation:</span>
              <span className="font-medium">{trustProfile.localReputationScore}/100</span>
            </div>
            <div className="flex justify-between">
              <span>Overall Score:</span>
              <span className="font-medium">{trustProfile.overallTrustScore}/100</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
