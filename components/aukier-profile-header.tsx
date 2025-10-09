import { Star, MapPin, CheckCircle2, Award, Briefcase } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AukierTrustBadges } from "@/components/trust/aukier-trust-badges"
import { AukierProfile } from "@/lib/types/african-marketplace"

interface AukierProfileHeaderProps {
  aukier?: AukierProfile
}

export function AukierProfileHeader({ aukier }: AukierProfileHeaderProps) {
  // Mock data for demonstration
  const mockAukier: AukierProfile = aukier || {
    id: "1",
    name: "Chisomo Banda",
    phone: "+265 991 234 567",
    title: "Master Plumber",
    skills: ["Plumbing", "Pipe Installation", "Leak Repair"],
    location: {
      id: "1",
      city: "Lilongwe",
      district: "Lilongwe",
      area: "Area 3"
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
      communityEndorsements: [
        {
          id: "1",
          endorserName: "Grace Mwale",
          endorserPhone: "+265 992 345 678",
          relationship: "neighbor",
          endorsementText: "Chisomo fixed our kitchen sink perfectly. Very professional and honest pricing.",
          verified: true,
          createdAt: new Date()
        }
      ],
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
    updatedAt: new Date()
  }

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Avatar className="h-24 w-24 border-2 border-primary/20">
          <AvatarImage src={mockAukier.image} alt={mockAukier.name} />
          <AvatarFallback>
            {mockAukier.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{mockAukier.name}</h1>
                {mockAukier.verified && <CheckCircle2 className="h-5 w-5 text-primary" />}
              </div>
              <p className="text-lg text-muted-foreground">{mockAukier.title}</p>
            </div>
            <Badge variant="secondary" className="w-fit text-base font-semibold">
              {mockAukier.currency} {mockAukier.hourlyRate.toLocaleString()}/hr
            </Badge>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{mockAukier.location.city}, {mockAukier.location.area}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">{mockAukier.rating}</span>
              <span className="text-muted-foreground">({mockAukier.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span>234 jobs completed</span>
            </div>
          </div>

          {/* African Trust System */}
          <div className="mt-4">
            <AukierTrustBadges trustProfile={mockAukier.trustProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}
