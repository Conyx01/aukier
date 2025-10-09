"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ThumbsUp } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    client: {
      name: "Mercy Kachale",
      avatar: "/client-1.jpg",
    },
    aukier: {
      name: "Chisomo Banda",
      service: "Plumbing",
    },
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Chisomo did an excellent job fixing our kitchen sink leak. Very professional, arrived on time, and cleaned up after the work. The pricing was fair and transparent. Highly recommend!",
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    client: {
      name: "James Nyirenda",
      avatar: "/client-2.jpg",
    },
    aukier: {
      name: "Thandiwe Phiri",
      service: "Electrical",
    },
    rating: 5,
    date: "1 month ago",
    comment:
      "Outstanding service! She installed our new water heater quickly and efficiently. Fair pricing and great communication throughout the project. Will definitely hire again.",
    helpful: 8,
    verified: true,
  },
  {
    id: 3,
    client: {
      name: "Esther Phiri",
      avatar: "/client-3.jpg",
    },
    aukier: {
      name: "Mphatso Mwale",
      service: "Carpentry",
    },
    rating: 4,
    date: "2 months ago",
    comment:
      "Very knowledgeable and skilled carpenter. Fixed our bathroom drainage issue that others couldn't solve. Took a bit longer than expected but the quality was worth it.",
    helpful: 5,
    verified: true,
  },
]

export function ReviewsList() {
  const [helpfulClicks, setHelpfulClicks] = useState<Record<number, boolean>>({})

  const toggleHelpful = (id: number) => {
    setHelpfulClicks({ ...helpfulClicks, [id]: !helpfulClicks[id] })
  }

  return (
    <div className="mt-6 space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.client.avatar || "/placeholder.svg"} alt={review.client.name} />
                  <AvatarFallback>
                    {review.client.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{review.client.name}</h4>
                    {review.verified && (
                      <Badge variant="outline" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Hired {review.aukier.name} for {review.aukier.service}
                  </p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>

            <div className="mt-3 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                />
              ))}
            </div>

            <p className="mt-3 leading-relaxed text-muted-foreground">{review.comment}</p>

            <div className="mt-4 flex items-center gap-2">
              <Button variant="ghost" size="sm" className="gap-2" onClick={() => toggleHelpful(review.id)}>
                <ThumbsUp className={`h-4 w-4 ${helpfulClicks[review.id] ? "fill-primary text-primary" : ""}`} />
                Helpful ({review.helpful + (helpfulClicks[review.id] ? 1 : 0)})
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
