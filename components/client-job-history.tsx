import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, CheckCircle2 } from "lucide-react"

const completedJobs = [
  {
    id: 1,
    title: "Bathroom Pipe Leak Repair",
    aukier: {
      name: "Chisomo Banda",
      avatar: "/african-plumber.jpg",
    },
    completedDate: "2 weeks ago",
    amount: "MWK 8,500",
    rating: 5,
    status: "completed",
  },
  {
    id: 2,
    title: "Office AC Installation",
    aukier: {
      name: "Thandiwe Phiri",
      avatar: "/african-electrician.jpg",
    },
    completedDate: "1 month ago",
    amount: "MWK 45,000",
    rating: 5,
    status: "completed",
  },
  {
    id: 3,
    title: "Custom Furniture Build",
    aukier: {
      name: "Mphatso Mwale",
      avatar: "/african-carpenter.jpg",
    },
    completedDate: "2 months ago",
    amount: "MWK 120,000",
    rating: 4,
    status: "completed",
  },
]

export function ClientJobHistory() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Job History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {completedJobs.map((job) => (
            <div key={job.id} className="flex gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
              <Avatar className="h-12 w-12">
                <AvatarImage src={job.aukier.avatar || "/placeholder.svg"} alt={job.aukier.name} />
                <AvatarFallback>
                  {job.aukier.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-semibold">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">with {job.aukier.name}</p>
                  </div>
                  <Badge variant="outline" className="w-fit gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-muted-foreground">{job.completedDate}</span>
                  <span className="font-semibold text-primary">{job.amount}</span>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < job.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
