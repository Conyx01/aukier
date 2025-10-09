import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, TrendingUp, Users } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "All transactions are encrypted and secure with mobile money integration",
  },
  {
    icon: Zap,
    title: "Instant Activation",
    description: "Your subscription activates immediately after payment confirmation",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Premium features help you get more visibility and win more jobs",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Get help when you need it with priority customer support",
  },
]

export function SubscriptionBenefits() {
  return (
    <div className="mt-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Why Upgrade?</h2>
        <p className="mt-2 text-muted-foreground">Unlock the full potential of Aukier</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          return (
            <Card key={benefit.title}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-8 rounded-lg bg-muted p-6 text-center">
        <p className="text-sm text-muted-foreground">
          All plans include a 7-day money-back guarantee. Cancel anytime with no questions asked.
        </p>
      </div>
    </div>
  )
}
