"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AukierCard } from "@/components/aukier-card"
import { BrowseFilters } from "@/components/browse-filters"
import { AukierProfile } from "@/lib/types/african-marketplace"

// Mock data for demonstration
const mockAukiers: AukierProfile[] = [
  {
    id: "1",
    name: "Chisomo Banda",
    phone: "+265 991 234 567",
    title: "Master Plumber",
    skills: ["Plumbing", "Pipe Installation", "Leak Repair", "Water Heater Installation"],
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
  },
  {
    id: "2",
    name: "Thabo Mthembu",
    phone: "+265 993 456 789",
    title: "Certified Electrician",
    skills: ["Electrical Wiring", "Circuit Installation", "Generator Repair", "Solar Installation"],
    location: {
      id: "2",
      city: "Blantyre",
      district: "Blantyre",
      area: "Ndirande"
    },
    hourlyRate: 6000,
    currency: "MWK",
    rating: 4.8,
    reviewCount: 89,
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
    updatedAt: new Date()
  },
  {
    id: "3",
    name: "Grace Phiri",
    phone: "+265 994 567 890",
    title: "Professional Designer",
    skills: ["Graphic Design", "Logo Design", "Web Design", "Brand Identity"],
    location: {
      id: "3",
      city: "Lilongwe",
      district: "Lilongwe",
      area: "Area 12"
    },
    hourlyRate: 4000,
    currency: "MWK",
    rating: 4.7,
    reviewCount: 156,
    image: "/african-designer.jpg",
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
      communityTrustScore: 90,
      localReputationScore: 87,
      overallTrustScore: 89
    },
    paymentMethods: [],
    availability: {
      monday: [{ start: "09:00", end: "18:00", available: true }],
      tuesday: [{ start: "09:00", end: "18:00", available: true }],
      wednesday: [{ start: "09:00", end: "18:00", available: true }],
      thursday: [{ start: "09:00", end: "18:00", available: true }],
      friday: [{ start: "09:00", end: "18:00", available: true }],
      saturday: [{ start: "10:00", end: "14:00", available: true }],
      sunday: []
    },
    languages: ["Chichewa", "English"],
    portfolio: [],
    services: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]


export default function BrowseAukiersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [sortBy, setSortBy] = useState("rating")
  const [filteredAukiers, setFilteredAukiers] = useState(mockAukiers)

  // Filter and search logic
  useEffect(() => {
    let filtered = mockAukiers

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(aukier => 
        aukier.skills.some(skill => 
          skill.toLowerCase().includes(selectedCategory.toLowerCase())
        )
      )
    }

    // Location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(aukier => 
        aukier.location.city === selectedLocation
      )
    }

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(aukier =>
        aukier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        aukier.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        aukier.skills.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "price":
          return a.hourlyRate - b.hourlyRate
        case "reviews":
          return b.reviewCount - a.reviewCount
        case "trust":
          return b.trustProfile.overallTrustScore - a.trustProfile.overallTrustScore
        default:
          return 0
      }
    })

    setFilteredAukiers(filtered)
  }, [searchQuery, selectedCategory, selectedLocation, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Trusted Aukiers</h1>
          <p className="text-muted-foreground">
            Connect with verified skilled workers across Malawi. From plumbers to developers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <BrowseFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            sortBy={sortBy}
            setSortBy={setSortBy}
            resultCount={filteredAukiers.length}
          />
        </div>

        {/* Aukiers Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAukiers.map((aukier) => (
            <AukierCard key={aukier.id} aukier={aukier} />
          ))}
        </div>

        {/* No Results */}
        {filteredAukiers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Aukiers Found</h3>
              <p>Try adjusting your search criteria or browse different categories.</p>
            </div>
            <Button 
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedLocation("All Locations")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
