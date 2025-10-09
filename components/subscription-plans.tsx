import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "MWK 0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Create basic profile",
      "Apply to 5 jobs per month",
      "Basic messaging",
      "Community support",
      "Standard visibility",
    ],
    limitations: ["Limited job applications", "No priority support", "No featured listing"],
    current: false,
    popular: false,
  },
  {
    name: "Professional",
    price: "MWK 15,000",
    period: "per month",
    description: "For active Aukiers",
    features: [
      "Enhanced profile with portfolio",
      "Unlimited job applications",
      "Priority messaging",
      "Featured in search results",
      "Analytics dashboard",
      "Priority support",
      "Verified badge",
    ],
    limitations: [],
    current: true,
    popular: true,
  },
  {
    name: "Business",
    price: "MWK 35,000",
    period: "per month",
    description: "For businesses and teams",
    features: [
      "Everything in Professional",
      "Multiple team members",
      "Advanced analytics",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Invoice management",
      "Priority job matching",
    ],
    limitations: [],
    current: false,
    popular: false,
  },
]

export function SubscriptionPlans() {
  return (
    <div className="mt-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Choose Your Plan</h2>
        <p className="mt-2 text-muted-foreground">Upgrade anytime to unlock more features</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${plan.popular ? "border-primary shadow-lg" : ""} ${
              plan.current ? "border-primary/50" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="px-3 py-1">Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{plan.name}</span>
                {plan.current && <Badge variant="outline">Current</Badge>}
              </CardTitle>
              <div className="mt-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant={plan.current ? "outline" : "default"} disabled={plan.current}>
                {plan.current ? "Current Plan" : plan.name === "Free" ? "Downgrade" : "Upgrade"}
              </Button>

              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {plan.limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-2 opacity-50">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span className="text-sm line-through">{limitation}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
