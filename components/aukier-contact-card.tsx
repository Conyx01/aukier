"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Phone, Heart } from "lucide-react"
import { useState } from "react"

export function AukierContactCard() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="text-lg">Contact Chisomo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full gap-2" size="lg">
          <MessageSquare className="h-5 w-5" />
          Send Message
        </Button>
        <Button variant="outline" className="w-full gap-2 bg-transparent" size="lg">
          <Phone className="h-5 w-5" />
          Request Call
        </Button>
        <Button
          variant="outline"
          className="w-full gap-2 bg-transparent"
          size="lg"
          onClick={() => setIsSaved(!isSaved)}
        >
          <Heart className={`h-5 w-5 ${isSaved ? "fill-primary text-primary" : ""}`} />
          {isSaved ? "Saved" : "Save Aukier"}
        </Button>

        <div className="mt-6 space-y-3 border-t border-border pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Response time</span>
            <span className="font-semibold">Within 2 hours</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Availability</span>
            <span className="font-semibold">Mon-Sat, 7am-6pm</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Service area</span>
            <span className="font-semibold">Lilongwe & nearby</span>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-muted p-4">
          <p className="text-xs text-muted-foreground">
            All Aukiers are verified and background checked. Your safety and satisfaction are our priority.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
