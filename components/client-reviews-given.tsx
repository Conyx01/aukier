import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    aukier: "Chisomo Banda",
    service: "Plumbing",
    rating: 5,
    comment: "Excellent work! Very professional and completed the job quickly.",
    date: "2 weeks ago",
  },
  {
    id: 2,
    aukier: "Thandiwe Phiri",
    service: "Electrical",
    rating: 5,
    comment: "Great service, highly recommend. Will hire again for future projects.",
    date: "1 month ago",
  },
  {
    id: 3,
    aukier: "Mphatso Mwale",
    service: "Carpentry",
    rating: 4,
    comment: "Good quality work. Took a bit longer than expected but result was worth it.",
    date: "2 months ago",
  },
]

export function ClientReviewsGiven() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reviews Given</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">{review.aukier}</h4>
                  <p className="text-xs text-muted-foreground">{review.service}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
              <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
