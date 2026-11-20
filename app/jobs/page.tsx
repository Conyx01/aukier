"use client"

import { useState, useEffect } from "react"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { JobCard } from "@/components/job-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock job data
const mockJobs = [
  {
    id: "1",
    title: "Fix leaking kitchen sink",
    description: "Kitchen sink has been leaking for 2 days. Need urgent repair. Located in Area 3, Lilongwe.",
    category: "plumbing",
    budget: "5000-10000",
    urgency: "high",
    location: "Lilongwe",
    specificArea: "Area 3",
    timeline: "today",
    skills: ["Plumbing", "Pipe Repair"],
    contactMethod: "phone",
    phoneNumber: "+265 991 234 567",
    postedBy: "Grace Mwale",
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    status: "open",
    applicants: 3,
    views: 12
  },
  {
    id: "2",
    title: "Design company logo",
    description: "Need a professional logo for my new business. Should be modern and memorable. Budget is flexible.",
    category: "design",
    budget: "10000-25000",
    urgency: "medium",
    location: "Blantyre",
    specificArea: "Ndirande",
    timeline: "this-week",
    skills: ["Design", "Logo Design"],
    contactMethod: "whatsapp",
    phoneNumber: "+265 992 345 678",
    postedBy: "John Banda",
    postedAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    status: "open",
    applicants: 7,
    views: 25
  },
  {
    id: "3",
    title: "Electrical wiring for new house",
    description: "Complete electrical installation for 3-bedroom house. Need certified electrician with experience.",
    category: "electrical",
    budget: "25000-50000",
    urgency: "low",
    location: "Mzuzu",
    specificArea: "Katoto",
    timeline: "next-week",
    skills: ["Electrical", "Wiring"],
    contactMethod: "phone",
    phoneNumber: "+265 993 456 789",
    postedBy: "Mary Phiri",
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    status: "open",
    applicants: 2,
    views: 8
  },
  {
    id: "4",
    title: "URGENT: Car engine repair",
    description: "Car broke down on the highway. Need immediate repair. Can pay extra for urgent service.",
    category: "mechanical",
    budget: "over-50000",
    urgency: "urgent",
    location: "Lilongwe",
    specificArea: "City Center",
    timeline: "asap",
    skills: ["Mechanical", "Engine Repair"],
    contactMethod: "phone",
    phoneNumber: "+265 994 567 890",
    postedBy: "Peter Mwale",
    postedAt: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    status: "open",
    applicants: 1,
    views: 5
  }
]

const categories = [
  { id: "all", name: "All Categories", icon: "👥" },
  { id: "plumbing", name: "Plumbing", icon: "🔧" },
  { id: "electrical", name: "Electrical", icon: "⚡" },
  { id: "carpentry", name: "Carpentry", icon: "🪚" },
  { id: "mechanical", name: "Mechanical", icon: "🔩" },
  { id: "design", name: "Design", icon: "🎨" },
  { id: "development", name: "Development", icon: "💻" },
  { id: "cleaning", name: "Cleaning", icon: "🧹" },
  { id: "other", name: "Other", icon: "🛠️" }
]

const urgencyLevels = [
  { id: "all", name: "All Urgency" },
  { id: "low", name: "Low", color: "bg-green-100 text-green-800" },
  { id: "medium", name: "Medium", color: "bg-yellow-100 text-yellow-800" },
  { id: "high", name: "High", color: "bg-orange-100 text-orange-800" },
  { id: "urgent", name: "Urgent", color: "bg-red-100 text-red-800" }
]

const budgetRanges = [
  { id: "all", name: "All Budgets" },
  { id: "under-5000", name: "Under MWK 5,000" },
  { id: "5000-10000", name: "MWK 5,000 - 10,000" },
  { id: "10000-25000", name: "MWK 10,000 - 25,000" },
  { id: "25000-50000", name: "MWK 25,000 - 50,000" },
  { id: "over-50000", name: "Over MWK 50,000" }
]

const locations = [
  "All Locations",
  "Lilongwe",
  "Blantyre", 
  "Mzuzu",
  "Zomba",
  "Kasungu",
  "Mangochi"
]

export default function BrowseJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedUrgency, setSelectedUrgency] = useState("all")
  const [selectedBudget, setSelectedBudget] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [sortBy, setSortBy] = useState("recent")
  const [filteredJobs, setFilteredJobs] = useState(mockJobs)

  // Filter and search logic
  useEffect(() => {
    let filtered = mockJobs

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(job => job.category === selectedCategory)
    }

    // Urgency filter
    if (selectedUrgency !== "all") {
      filtered = filtered.filter(job => job.urgency === selectedUrgency)
    }

    // Budget filter
    if (selectedBudget !== "all") {
      filtered = filtered.filter(job => job.budget === selectedBudget)
    }

    // Location filter
    if (selectedLocation !== "All Locations") {
      filtered = filtered.filter(job => job.location === selectedLocation)
    }

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.skills.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "recent":
          return b.postedAt.getTime() - a.postedAt.getTime()
        case "urgent":
          const urgencyOrder = { urgent: 4, high: 3, medium: 2, low: 1 }
          return urgencyOrder[b.urgency as keyof typeof urgencyOrder] - urgencyOrder[a.urgency as keyof typeof urgencyOrder]
        case "budget":
          const budgetOrder = { "over-50000": 5, "25000-50000": 4, "10000-25000": 3, "5000-10000": 2, "under-5000": 1 }
          return budgetOrder[b.budget as keyof typeof budgetOrder] - budgetOrder[a.budget as keyof typeof budgetOrder]
        case "applicants":
          return b.applicants - a.applicants
        default:
          return 0
      }
    })

    setFilteredJobs(filtered)
  }, [searchQuery, selectedCategory, selectedUrgency, selectedBudget, selectedLocation, sortBy])


  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Jobs</h1>
          <p className="text-muted-foreground">
            Find jobs that match your skills and availability.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs by title, description, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[180px]">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="urgent">Most Urgent</SelectItem>
                  <SelectItem value="budget">Highest Budget</SelectItem>
                  <SelectItem value="applicants">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <span>{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Urgency Level</h3>
              <div className="flex flex-wrap gap-2">
                {urgencyLevels.map((level) => (
                  <Button
                    key={level.id}
                    variant={selectedUrgency === level.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedUrgency(level.id)}
                    className="flex items-center gap-2"
                  >
                    {level.id !== "all" && (
                      <Badge className={level.color}>
                        {level.name}
                      </Badge>
                    )}
                    {level.id === "all" && level.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Budget Range</h3>
              <div className="flex flex-wrap gap-2">
                {budgetRanges.map((range) => (
                  <Button
                    key={range.id}
                    variant={selectedBudget === range.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedBudget(range.id)}
                  >
                    {range.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="flex gap-2">
              {selectedCategory !== "all" && (
                <Badge variant="secondary">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </Badge>
              )}
              {selectedLocation !== "All Locations" && (
                <Badge variant="secondary">
                  {selectedLocation}
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary">
                  "{searchQuery}"
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Jobs Found</h3>
              <p>Try adjusting your search criteria or browse different categories.</p>
            </div>
            <Button 
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSelectedUrgency("all")
                setSelectedBudget("all")
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
