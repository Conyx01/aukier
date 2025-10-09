"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const ratingCategories = [
  { id: "quality", label: "Quality of Work" },
  { id: "communication", label: "Communication" },
  { id: "professionalism", label: "Professionalism" },
  { id: "value", label: "Value for Money" },
]

export function ReviewForm() {
  const [overallRating, setOverallRating] = useState(0)
  const [categoryRatings, setCategoryRatings] = useState<Record<string, number>>({})
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<{ id: string; star: number } | null>(null)

  const handleCategoryRating = (categoryId: string, rating: number) => {
    setCategoryRatings({ ...categoryRatings, [categoryId]: rating })
  }

  return (
    <form className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 border-b border-border pb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/african-plumber.jpg" alt="Chisomo Banda" />
              <AvatarFallback>CB</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold">Chisomo Banda</h3>
              <p className="text-sm text-muted-foreground">Master Plumber</p>
              <Badge variant="outline" className="mt-2">
                Bathroom Pipe Leak Repair
              </Badge>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-3">
              <Label className="text-base">Overall Rating</Label>
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setOverallRating(i + 1)}
                    onMouseEnter={() => setHoveredStar(i + 1)}
                    onMouseLeave={() => setHoveredStar(null)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-10 w-10 ${
                        i < (hoveredStar || overallRating) ? "fill-primary text-primary" : "fill-muted text-muted"
                      }`}
                    />
                  </button>
                ))}
                {overallRating > 0 && <span className="ml-2 text-lg font-semibold">{overallRating}.0</span>}
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-base">Rate by Category</Label>
              {ratingCategories.map((category) => (
                <div key={category.id} className="flex items-center justify-between">
                  <span className="text-sm">{category.label}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleCategoryRating(category.id, i + 1)}
                        onMouseEnter={() => setHoveredCategory({ id: category.id, star: i + 1 })}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-5 w-5 ${
                            i <
                            (
                              hoveredCategory?.id === category.id
                                ? hoveredCategory.star
                                : categoryRatings[category.id] || 0
                            )
                              ? "fill-primary text-primary"
                              : "fill-muted text-muted"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="review">Your Review</Label>
              <Textarea
                id="review"
                placeholder="Tell others about your experience working with this Aukier. What did they do well? What could be improved?"
                className="min-h-32"
              />
              <p className="text-xs text-muted-foreground">Minimum 50 characters</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recommend">Would you recommend this Aukier?</Label>
              <div className="flex gap-3">
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Yes
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  No
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button type="button" variant="outline" className="sm:w-auto bg-transparent">
          Cancel
        </Button>
        <Button type="submit" className="sm:w-auto">
          Submit Review
        </Button>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Your review will be public and help other clients make informed decisions. Please be honest and respectful.
        </p>
      </div>
    </form>
  )
}
