import { Star, MapPin, CheckCircle2, Award, Briefcase } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function AukierProfileHeader() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Avatar className="h-24 w-24 border-2 border-primary/20">
          <AvatarImage src="/african-plumber.jpg" alt="Chisomo Banda" />
          <AvatarFallback>CB</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Chisomo Banda</h1>
                <CheckCircle2 className="h-5 w-5 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground">Master Plumber</p>
            </div>
            <Badge variant="secondary" className="w-fit text-base font-semibold">
              MWK 5,000/hr
            </Badge>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Lilongwe, Malawi</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-primary text-primary" />
              <span className="font-semibold">4.9</span>
              <span className="text-muted-foreground">(127 reviews)</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span>234 jobs completed</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1">
              <Award className="h-3 w-3" />
              Top Rated
            </Badge>
            <Badge variant="outline">Verified ID</Badge>
            <Badge variant="outline">Background Checked</Badge>
            <Badge variant="outline">Member since 2023</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
