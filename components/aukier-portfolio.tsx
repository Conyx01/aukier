import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const portfolioItems = [
  {
    id: 1,
    title: "Modern Bathroom Installation",
    image: "/portfolio-1.jpg",
    description: "Complete bathroom renovation with new fixtures",
  },
  {
    id: 2,
    title: "Commercial Kitchen Setup",
    image: "/portfolio-2.jpg",
    description: "Restaurant kitchen plumbing installation",
  },
  {
    id: 3,
    title: "Water Heater Replacement",
    image: "/portfolio-3.jpg",
    description: "High-efficiency water heater installation",
  },
  {
    id: 4,
    title: "Emergency Pipe Repair",
    image: "/portfolio-4.jpg",
    description: "24-hour emergency leak repair service",
  },
]

export function AukierPortfolio() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer overflow-hidden rounded-lg border border-border">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
