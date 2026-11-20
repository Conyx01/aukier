import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that works best for you. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Client Plan - Free */}
          <Card>
            <CardHeader>
              <CardTitle>Client Plan</CardTitle>
              <CardDescription>Perfect for finding talent</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Free</span>
                <span className="text-muted-foreground"> / forever</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Browse all Aukiers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Post unlimited jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">View profiles and portfolios</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Secure messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Read and write reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Payment protection</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started Free
              </Button>
            </CardContent>
          </Card>

          {/* Aukier Basic - Most Popular */}
          <Card className="border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
            </div>
            <CardHeader>
              <CardTitle>Aukier Basic</CardTitle>
              <CardDescription>Start growing your client base</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">MWK 2,000</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Everything in Client Plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Create detailed profile</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Portfolio showcase (up to 10 items)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Accept job offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Priority in search results</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Basic analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Mobile money payments</span>
                </li>
              </ul>
              <Button className="w-full">
                Start 7-Day Free Trial
              </Button>
            </CardContent>
          </Card>

          {/* Aukier Pro */}
          <Card>
            <CardHeader>
              <CardTitle>Aukier Pro</CardTitle>
              <CardDescription>For serious professionals</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">MWK 5,000</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Everything in Basic</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Unlimited portfolio items</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Featured profile badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Top of search results</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Direct client outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-sm">Multi-payment options</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Details */}
        <div className="space-y-12">
          {/* Transaction Fees */}
          <Card>
            <CardHeader>
              <CardTitle>Transaction Fees</CardTitle>
              <CardDescription>Fair and transparent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Client Payment</span>
                  <span className="text-muted-foreground">3% per transaction</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Aukier Payout</span>
                  <span className="text-muted-foreground">Free</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Mobile Money</span>
                  <span className="text-muted-foreground">Standard network fees apply</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Can I cancel anytime?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have 
                  access until the end of your billing period.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                <p className="text-sm text-muted-foreground">
                  We accept all major mobile money services including Mpamba, Airtel Money, 
                  M-Pesa, and international payment cards.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Is there a fee for posting jobs?</h4>
                <p className="text-sm text-muted-foreground">
                  No, posting jobs is completely free. We only charge a small transaction fee 
                  when you pay an Aukier through our platform.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">How do I upgrade or downgrade?</h4>
                <p className="text-sm text-muted-foreground">
                  You can change your plan anytime from your account settings. Upgrades take 
                  effect immediately, while downgrades take effect at the end of your billing period.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Join thousands of clients and Aukiers already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">Start Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}








