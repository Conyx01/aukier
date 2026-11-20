import { ReviewForm } from "@/components/review-form"

export default function ReviewPage({ params }: { params: { jobId: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-2xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Leave a Review</h1>
          <p className="mt-2 text-muted-foreground">Share your experience to help others make informed decisions</p>
        </div>
        <ReviewForm />
      </main>
    </div>
  )
}
