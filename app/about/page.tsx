import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Globe, Heart, Shield, Clock } from "lucide-react"
import Link from "next/link"

export default function OurStoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building bridges between opportunity and talent across Africa
          </p>
        </div>

        {/* Story Timeline */}
        <div className="space-y-12 mb-16">
          {/* The Vision */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle>The Vision</CardTitle>
                  <CardDescription>What we're building</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Aukier was born from a simple observation: <strong>Africa has extraordinary talent, but talent and opportunity often fail to connect.</strong>
              </p>
              <p className="text-muted-foreground mb-4">
                While platforms like Upwork and Fiverr serve global digital freelancers, they miss the reality of African markets. 
                Here, trusted plumbers, electricians, carpenters, and skilled workers are discovered through word-of-mouth, but this limits 
                their reach and opportunities.
              </p>
              <p className="text-muted-foreground">
                We're building the infrastructure layer that connects skilled workers with opportunities, 
                building trust through community verification, and empowering local economies across Africa.
              </p>
            </CardContent>
          </Card>

          {/* The Problem */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <Users className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <CardTitle>The Problem We're Solving</CardTitle>
                  <CardDescription>Real challenges in African markets</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Fragmented Talent</h4>
                  <p className="text-sm text-muted-foreground">
                    Skilled workers aren't digitally visible. A master plumber in Lilongwe 
                    might struggle to find work beyond their immediate network.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Trust Barriers</h4>
                  <p className="text-sm text-muted-foreground">
                    People fear hiring strangers. Safety, quality, and reliability are 
                    concerns that traditional platforms don't address for African contexts.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Payment Challenges</h4>
                  <p className="text-sm text-muted-foreground">
                    Many rely on cash; online payments are less trusted or inaccessible. 
                    We need mobile money integration, not just card payments.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Limited Platforms</h4>
                  <p className="text-sm text-muted-foreground">
                    Global platforms are too distant. Upwork and Fiverr are optimized 
                    for digital freelancers, not local tradespeople.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* The Solution */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle>How We're Different</CardTitle>
                  <CardDescription>Built for African realities</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    Community Trust Layer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Verified identities, skill proofs, and community endorsements. 
                    We build trust through local networks and references, not just 
                    digital ratings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    Mobile-First Payment
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Integrated with Mpamba, Airtel Money, M-Pesa, and more. 
                    Handle both online and offline-friendly flows with escrow protection.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-purple-500" />
                    Local Discovery
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Filter by skill, proximity, rating, and availability. 
                    Find nearby Aukiers or connect with remote talent.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    Word-of-Mouth Integration
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Allow users to endorse and vouch for workers. 
                    Support group/agency accounts for companies managing 
                    multiple workers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
              <CardDescription>What drives us</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                To become <strong>the trusted infrastructure layer</strong> that connects skilled workers 
                with opportunities across Africa, starting with Malawi.
              </p>
              <p className="text-muted-foreground mb-4">
                We believe that when talented workers can easily connect with clients who need their skills, 
                entire communities benefit. We're not just building another gig platform—we're creating the 
                digital infrastructure that will power African economies.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Trust First</Badge>
                <Badge variant="secondary">Mobile-First</Badge>
                <Badge variant="secondary">Community Driven</Badge>
                <Badge variant="secondary">African Built</Badge>
                <Badge variant="secondary">Scalable</Badge>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Join the Movement</h2>
            <p className="text-muted-foreground">
              Be part of building Africa's talent infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Become an Aukier
                </Button>
              </Link>
              <Link href="/browse">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Find Trusted Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}








