import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AukierAbout() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>About</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          I am a certified master plumber with over 10 years of experience serving homes and businesses across Lilongwe.
          I specialize in residential and commercial plumbing installations, repairs, and maintenance. My commitment is
          to provide quality workmanship, honest pricing, and reliable service. I take pride in building long-term
          relationships with my clients through trust and excellent results.
        </p>

        <div className="mt-6">
          <h3 className="font-semibold">Skills & Expertise</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Pipe Installation",
              "Leak Repair",
              "Drain Cleaning",
              "Water Heater",
              "Bathroom Fitting",
              "Kitchen Plumbing",
              "Emergency Service",
              "Maintenance",
            ].map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Languages</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline">Chichewa</Badge>
            <Badge variant="outline">English</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
