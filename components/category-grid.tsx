import { Wrench, Zap, Hammer, Paintbrush, Code, Camera, Truck, Users, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Plumbing", icon: Wrench, count: "1,234 jobs", rating: "4.9" },
  { name: "Electrical", icon: Zap, count: "1,189 jobs", rating: "4.8" },
  { name: "Carpentry", icon: Hammer, count: "1,056 jobs", rating: "4.9" },
  { name: "Painting", icon: Paintbrush, count: "942 jobs", rating: "4.7" },
  { name: "Tech & IT", icon: Code, count: "2,198 jobs", rating: "4.9" },
  { name: "Photography", icon: Camera, count: "687 jobs", rating: "4.8" },
  { name: "Transport", icon: Truck, count: "576 jobs", rating: "4.6" },
  { name: "Events", icon: Users, count: "465 jobs", rating: "4.8" },
]

export function CategoryGrid() {
  return (
    <section className="border-t bg-muted/30 px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-balance text-2xl font-bold md:text-3xl">Browse talent by category</h2>
        <p className="mt-2 text-muted-foreground">
          Looking for work?{" "}
          <a href="/browse" className="text-primary underline">
            Browse jobs
          </a>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              >
                <CardContent className="flex flex-col items-start gap-2 p-4 md:p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{category.rating}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
