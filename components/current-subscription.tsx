import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Calendar } from "lucide-react"

export function CurrentSubscription() {
  return (
    <Card className="border-primary/50 bg-primary/5">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">Professional Plan</h3>
              <Badge className="gap-1">
                <CheckCircle2 className="h-3 w-3" />
                Active
              </Badge>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Renews on March 15, 2025</span>
            </div>
            <p className="mt-2 text-2xl font-bold">MWK 15,000/month</p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <Button variant="outline" className="bg-transparent">
              Manage Subscription
            </Button>
            <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
              Cancel Plan
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
