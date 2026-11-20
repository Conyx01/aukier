import { BoldHeroSection } from "@/components/bold-hero-section"
import { VibrantCategoryGrid } from "@/components/vibrant-category-grid"
import { HustleCultureSection } from "@/components/hustle-culture-section"
import { CommunityProofSection } from "@/components/community-proof-section"
import { DualCTASection } from "@/components/dual-cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="overflow-hidden">
        <BoldHeroSection />
        <VibrantCategoryGrid />
        <HustleCultureSection />
        <CommunityProofSection />
        <DualCTASection />
      </main>
    </div>
  )
}
