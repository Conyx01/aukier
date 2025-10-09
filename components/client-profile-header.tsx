import { MapPin, CheckCircle2, Briefcase, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ClientProfileHeader() {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <Avatar className="h-24 w-24 border-2 border-primary/20">
            <AvatarImage src="/client-profile.jpg" alt="Sarah Mwanza" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Sarah Mwanza</h1>
              <CheckCircle2 className="h-5 w-5 text-primary" />
            </div>
            <p className="text-lg text-muted-foreground">Business Owner</p>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Blantyre, Malawi</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>42 jobs posted</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Member since Jan 2024</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline">Verified Email</Badge>
              <Badge variant="outline">Verified Phone</Badge>
              <Badge variant="outline">Payment Verified</Badge>
            </div>
          </div>
        </div>

        <Button variant="outline">Edit Profile</Button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold">42</div>
          <div className="text-sm text-muted-foreground">Jobs Posted</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">38</div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold">4.8</div>
          <div className="text-sm text-muted-foreground">Avg Rating</div>
        </div>
      </div>
    </div>
  )
}
