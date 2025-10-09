import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    author: "Mercy Kachale",
    avatar: "/client-1.jpg",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Chisomo did an excellent job fixing our kitchen sink leak. Very professional, arrived on time, and cleaned up after the work. Highly recommend!",
  },
  {
    id: 2,
    author: "James Nyirenda",
    avatar: "/client-2.jpg",
    rating: 5,
    date: "1 month ago",
    comment:
      "Outstanding service! He installed our new water heater quickly and efficiently. Fair pricing and great communication throughout the project.",
  },
  {
    id: 3,
    author: "Esther Phiri",
    avatar: "/client-3.jpg",
    rating: 4,
    date: "2 months ago",
    comment:
      "Very knowledgeable and skilled plumber. Fixed our bathroom drainage issue that others couldn't solve. Will definitely hire again.",
  },
]

export function AukierReviews() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Reviews (127)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                  <AvatarFallback>
                    {review.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-semibold">{review.author}</h4>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
