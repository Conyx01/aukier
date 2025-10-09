// Core types for African talent marketplace platform
// Designed specifically for African market needs and cultural context

export interface Location {
  id: string
  city: string
  district: string
  area: string
  coordinates?: {
    lat: number
    lng: number
  }
  walkingDistance?: number // in km
}

export interface CommunityEndorsement {
  id: string
  endorserName: string
  endorserPhone: string
  relationship: 'neighbor' | 'church_member' | 'business_owner' | 'family' | 'friend'
  endorsementText: string
  verified: boolean
  createdAt: Date
}

export interface LocalReference {
  id: string
  referenceName: string
  referencePhone: string
  businessName?: string
  workDescription: string
  rating: number
  verified: boolean
  createdAt: Date
}

export interface CashTransaction {
  id: string
  amount: number
  currency: 'MWK'
  description: string
  clientName: string
  clientPhone: string
  completedAt: Date
  verified: boolean
}

export interface FamilyVouch {
  id: string
  familyMemberName: string
  relationship: 'parent' | 'sibling' | 'spouse' | 'cousin' | 'uncle' | 'aunt'
  phoneNumber: string
  vouchText: string
  verified: boolean
  createdAt: Date
}

export interface ReligiousEndorsement {
  id: string
  institutionName: string
  institutionType: 'church' | 'mosque' | 'temple'
  leaderName: string
  leaderPhone: string
  endorsementText: string
  verified: boolean
  createdAt: Date
}

export interface BusinessReference {
  id: string
  businessName: string
  businessType: string
  contactPerson: string
  contactPhone: string
  workDescription: string
  rating: number
  verified: boolean
  createdAt: Date
}

export interface AukierTrustProfile {
  // Basic verification
  phoneVerified: boolean
  nationalIdVerified: boolean
  addressVerified: boolean
  
  // African-specific trust signals
  communityEndorsements: CommunityEndorsement[]
  localReferences: LocalReference[]
  cashTransactionHistory: CashTransaction[]
  
  // Cultural trust elements
  familyVouches: FamilyVouch[]
  religiousEndorsements: ReligiousEndorsement[]
  localBusinessReferences: BusinessReference[]
  
  // Trust scores
  communityTrustScore: number // 0-100
  localReputationScore: number // 0-100
  overallTrustScore: number // 0-100
}

export interface MobileMoneyProvider {
  id: string
  name: string
  code: string
  icon: string
  color: string
  supported: boolean
  fees: {
    percentage: number
    minimum: number
    maximum: number
  }
}

export interface PaymentMethod {
  id: string
  type: 'mobile_money' | 'bank_transfer' | 'cash' | 'escrow'
  provider?: MobileMoneyProvider
  accountNumber?: string
  accountName?: string
  verified: boolean
  isDefault: boolean
}

export interface EscrowPayment {
  id: string
  jobId: string
  amount: number
  currency: 'MWK'
  status: 'pending' | 'released' | 'disputed' | 'refunded'
  milestones: MilestonePayment[]
  createdAt: Date
  releasedAt?: Date
}

export interface MilestonePayment {
  id: string
  description: string
  amount: number
  percentage: number
  status: 'pending' | 'completed' | 'approved' | 'rejected'
  completedAt?: Date
  approvedAt?: Date
}

export interface AukierProfile {
  id: string
  name: string
  phone: string
  email?: string
  title: string
  skills: string[]
  location: Location
  hourlyRate: number
  currency: 'MWK'
  rating: number
  reviewCount: number
  image?: string
  verified: boolean
  trustProfile: AukierTrustProfile
  paymentMethods: PaymentMethod[]
  availability: {
    monday: TimeSlot[]
    tuesday: TimeSlot[]
    wednesday: TimeSlot[]
    thursday: TimeSlot[]
    friday: TimeSlot[]
    saturday: TimeSlot[]
    sunday: TimeSlot[]
  }
  languages: string[]
  portfolio: PortfolioItem[]
  services: Service[]
  createdAt: Date
  updatedAt: Date
}

export interface TimeSlot {
  start: string // HH:MM format
  end: string // HH:MM format
  available: boolean
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  images: string[]
  clientName: string
  clientPhone: string
  completedAt: Date
  rating: number
  verified: boolean
}

export interface Service {
  id: string
  name: string
  description: string
  basePrice: number
  currency: 'MWK'
  pricingType: 'fixed' | 'hourly' | 'per_square_meter' | 'per_item'
  estimatedDuration: string
  category: string
}

export interface JobPosting {
  id: string
  title: string
  description: string
  category: string
  subcategory?: string
  location: Location
  budget: {
    min: number
    max: number
    currency: 'MWK'
    type: 'fixed' | 'hourly'
  }
  client: {
    id: string
    name: string
    phone: string
    location: Location
  }
  requirements: {
    experienceLevel: 'beginner' | 'intermediate' | 'expert' | 'any'
    estimatedDuration: string
    startDate: Date
    endDate?: Date
    skills: string[]
  }
  attachments: string[]
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
  proposals: JobProposal[]
  createdAt: Date
  updatedAt: Date
}

export interface JobProposal {
  id: string
  aukierId: string
  aukier: AukierProfile
  proposedPrice: number
  currency: 'MWK'
  estimatedDuration: string
  message: string
  attachments: string[]
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn'
  createdAt: Date
}

export interface Review {
  id: string
  jobId: string
  aukierId: string
  clientId: string
  rating: {
    overall: number
    quality: number
    communication: number
    professionalism: number
    value: number
  }
  comment: string
  wouldRecommend: boolean
  verified: boolean
  createdAt: Date
}

// Discovery and matching
export interface DiscoveryFilters {
  location?: Location
  maxDistance?: number // in km
  skills?: string[]
  rating?: number
  priceRange?: {
    min: number
    max: number
  }
  availability?: {
    day: string
    timeSlot: TimeSlot
  }
  verifiedOnly?: boolean
  communityEndorsed?: boolean
}

export interface NearbyAukier extends AukierProfile {
  distance: number // in km
  walkingTime?: number // in minutes
  communityConnections?: number
}

// Mobile money integration
export interface MobileMoneyTransaction {
  id: string
  provider: MobileMoneyProvider
  transactionId: string
  amount: number
  currency: 'MWK'
  status: 'pending' | 'completed' | 'failed' | 'cancelled'
  phoneNumber: string
  reference: string
  createdAt: Date
  completedAt?: Date
}

// Offline support
export interface OfflineData {
  aukiers: AukierProfile[]
  jobs: JobPosting[]
  lastSync: Date
  pendingActions: PendingAction[]
}

export interface PendingAction {
  id: string
  type: 'job_application' | 'review' | 'profile_update'
  data: any
  createdAt: Date
  retryCount: number
}
