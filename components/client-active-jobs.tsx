import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, DollarSign } from "lucide-react"

const activeJobs = [
  {
    id: 1,
    title: "Office Electrical Wiring Repair",
    category: "Electrical",
    location: "Blantyre CBD",
    budget: "MWK 25,000 - 35,000",
    postedDate: "2 days ago",
    proposals: 8,
    status: "open",
  },
  {
    id: 2,
    title: "Kitchen Renovation Plumbing",
    category: "Plumbing",
    location: "Limbe",
    budget: "MWK 50,000 - 70,000",
    postedDate: "5 days ago",
    proposals: 12,
    status: "in-progress",
  },
]

export function ClientActiveJobs() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeJobs.map((job) => (
            <div key={job.id} className="rounded-lg border border-border p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-2">
                    <h3 className="font-semibold">{job.title}</h3>
                    <Badge variant={job.status === "open" ? "default" : "secondary"} className="capitalize">
                      {job.status}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{job.category}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {job.postedDate}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{job.budget}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:items-end">
                  <Badge variant="outline">{job.proposals} proposals</Badge>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
