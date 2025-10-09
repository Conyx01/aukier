import { Star, MapPin, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const aukiers = [
  {
    id: 1,
    name: "Chisomo Banda",
    title: "Master Plumber",
    location: "Lilongwe",
    rating: 4.9,
    reviews: 127,
    hourlyRate: "MWK 5,000",
    verified: true,
    image: "/african-plumber.jpg",
  },
  {
    id: 2,
    name: "Thandiwe Phiri",
    title: "Electrician",
    location: "Blantyre",
    rating: 4.8,
    reviews: 94,
    hourlyRate: "MWK 6,000",
    verified: true,
    image: "/african-electrician.jpg",
  },
  {
    id: 3,
    name: "Mphatso Mwale",
    title: "Carpenter & Joiner",
    location: "Mzuzu",
    rating: 5.0,
    reviews: 156,
    hourlyRate: "MWK 4,500",
    verified: true,
    image: "/african-carpenter.jpg",
  },
  {
    id: 4,
    name: "Grace Tembo",
    title: "Graphic Designer",
    location: "Lilongwe",
    rating: 4.9,
    reviews: 83,
    hourlyRate: "MWK 7,000",
    verified: true,
    image: "/african-designer.jpg",
  },
]

export function FeaturedAukiers() {
  return (
    <section className="bg-muted/30 px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-balance text-2xl font-bold md:text-3xl">Top-rated Aukiers</h2>
            <p className="mt-2 text-muted-foreground">Trusted professionals ready to help</p>
          </div>
          <a href="/browse" className="hidden text-sm font-medium text-primary hover:underline md:block">
            View all →
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aukiers.map((aukier) => (
            <Card key={aukier.id} className="cursor-pointer transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={aukier.image || "/placeholder.svg"} alt={aukier.name} />
                      <AvatarFallback>
                        {aukier.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold truncate">{aukier.name}</h3>
                        {aukier.verified && <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-secondary" />}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{aukier.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-muted-foreground">{aukier.location}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-semibold">{aukier.rating}</span>
                      <span className="text-sm text-muted-foreground">({aukier.reviews})</span>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      {aukier.hourlyRate}/hr
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <a href="/browse" className="text-sm font-medium text-primary hover:underline">
            View all Aukiers →
          </a>
        </div>
      </div>
    </section>
  )
}
