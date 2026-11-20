import { ReviewsOverview } from "@/components/reviews-overview"
import { ReviewsFilter } from "@/components/reviews-filter"
import { ReviewsList } from "@/components/reviews-list"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Reviews & Ratings</h1>
          <p className="mt-2 text-muted-foreground">See what clients are saying about Aukiers</p>
        </div>
        <ReviewsOverview />
        <div className="mt-6">
          <ReviewsFilter />
        </div>
        <ReviewsList />
      </main>
    </div>
  )
}
