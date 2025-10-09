import { ClientProfileHeader } from "@/components/client-profile-header"
import { ClientActiveJobs } from "@/components/client-active-jobs"
import { ClientJobHistory } from "@/components/client-job-history"
import { ClientReviewsGiven } from "@/components/client-reviews-given"
import { MobileNav } from "@/components/mobile-nav"

export default function ClientProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <main className="container mx-auto max-w-6xl px-4 py-6">
        <ClientProfileHeader />
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ClientActiveJobs />
            <ClientJobHistory />
          </div>
          <div className="lg:col-span-1">
            <ClientReviewsGiven />
          </div>
        </div>
      </main>
    </div>
  )
}
