import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const ratingDistribution = [
  { stars: 5, count: 89, percentage: 70 },
  { stars: 4, count: 28, percentage: 22 },
  { stars: 3, count: 7, percentage: 5 },
  { stars: 2, count: 3, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 },
]

export function ReviewsOverview() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center border-r-0 md:border-r md:border-border">
            <div className="text-6xl font-bold">4.9</div>
            <div className="mt-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Based on 127 reviews</p>
          </div>

          <div className="space-y-3">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                <div className="flex w-12 items-center gap-1">
                  <span className="text-sm font-medium">{rating.stars}</span>
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                </div>
                <Progress value={rating.percentage} className="flex-1" />
                <span className="w-12 text-right text-sm text-muted-foreground">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
