import { AukierProfileHeader } from "@/components/aukier-profile-header"
import { AukierAbout } from "@/components/aukier-about"
import { AukierServices } from "@/components/aukier-services"
import { AukierPortfolio } from "@/components/aukier-portfolio"
import { AukierReviews } from "@/components/aukier-reviews"
import { AukierContactCard } from "@/components/aukier-contact-card"

export default function AukierProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AukierProfileHeader />
            <AukierAbout />
            <AukierServices />
            <AukierPortfolio />
            <AukierReviews />
          </div>
          <div className="lg:col-span-1">
            <AukierContactCard />
          </div>
        </div>
      </main>
    </div>
  )
}
