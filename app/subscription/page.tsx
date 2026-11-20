import { SubscriptionPlans } from "@/components/subscription-plans"
import { CurrentSubscription } from "@/components/current-subscription"
import { SubscriptionBenefits } from "@/components/subscription-benefits"

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Subscription Plans</h1>
          <p className="mt-2 text-muted-foreground">Choose the plan that works best for you</p>
        </div>
        <CurrentSubscription />
        <SubscriptionPlans />
        <SubscriptionBenefits />
      </main>
    </div>
  )
}
