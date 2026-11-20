import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Eye, Lock, AlertTriangle, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function TrustSafetyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trust & Safety</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your safety and security are our top priority. Learn how we protect you.
          </p>
        </div>

        {/* Trust Layers */}
        <div className="space-y-12 mb-16">
          {/* Verification System */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                <div>
                  <CardTitle>Multi-Layer Verification</CardTitle>
                  <CardDescription>Building trust step by step</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Lock className="h-5 w-5 text-blue-500" />
                    Identity Verification
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Every Aukier must verify their phone number and national ID. 
                    We cross-reference this information to ensure authenticity.
                  </p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Phone number verification</li>
                    <li>• National ID verification</li>
                    <li>• Address confirmation</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    Community Endorsements
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Local references and community vouches add credibility. 
                    Real people in the neighborhood vouch for Aukiers.
                  </p>
                  <ul className="text-sm space-y-1 ml-6">
                    <li>• Community endorsements</li>
                    <li>• Family vouches</li>
                    <li>• Religious endorsements</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Scores */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Heart className="h-6 w-6 text-pink-500" />
                <div>
                  <CardTitle>Trust Scoring System</CardTitle>
                  <CardDescription>Comprehensive reputation tracking</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">92%</div>
                  <h4 className="font-semibold">Overall Trust Score</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on verification, reviews, and community feedback
                  </p>
                </div>
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <h4 className="font-semibold">Community Trust</h4>
                  <p className="text-sm text-muted-foreground">
                    Verified by neighbors, families, and local references
                  </p>
                </div>
                <div className="space-y-2 text-center p-4 border rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">88%</div>
                  <h4 className="font-semibold">Local Reputation</h4>
                  <p className="text-sm text-muted-foreground">
                    Based on local business and community feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Safety Features */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-6 w-6 text-yellow-500" />
                <div>
                  <CardTitle>Safety Features</CardTitle>
                  <CardDescription>Your protection matters</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Payment Protection</h4>
                  <p className="text-sm text-muted-foreground">
                    All payments go through secure escrow. Funds are released 
                    only after job completion and client approval.
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>✓ Escrow protection</li>
                    <li>✓ Milestone payments</li>
                    <li>✓ Dispute resolution</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Profile Transparency</h4>
                  <p className="text-sm text-muted-foreground">
                    Every Aukier has a complete profile with skills, portfolio, 
                    reviews, and trust badges clearly displayed.
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>✓ Skills verification</li>
                    <li>✓ Portfolio showcase</li>
                    <li>✓ Real reviews</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Communication Safety</h4>
                  <p className="text-sm text-muted-foreground">
                    All communications happen through our platform. 
                    Contact information is protected and reported.
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>✓ In-platform messaging</li>
                    <li>✓ Anonymous contact</li>
                    <li>✓ Communication logs</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Dispute Resolution</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews disputes fairly. Both parties can 
                    provide evidence, and we mediate conflicts.
                  </p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>✓ Fair mediation</li>
                    <li>✓ Evidence review</li>
                    <li>✓ Quick resolution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What to Watch For */}
          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <CardTitle>Safety Guidelines</CardTitle>
                  <CardDescription>What to watch for</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">For Clients</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Always check Aukier profiles and trust scores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Use in-platform messaging to communicate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Pay through our secure escrow system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Report any suspicious behavior immediately</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">For Aukiers</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Complete all verification steps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Keep your profile and portfolio updated</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Respond to messages promptly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>Deliver quality work to maintain your rating</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report Issues */}
          <Card className="bg-destructive/5 border-destructive/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Eye className="h-6 w-6 text-destructive" />
                <div>
                  <CardTitle>Report Safety Concerns</CardTitle>
                  <CardDescription>We take every report seriously</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you encounter any safety issues, harassment, fraud, or suspicious behavior, 
                please report it immediately. Our safety team reviews every report within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="destructive" className="w-full sm:w-auto">
                    Report an Issue
                  </Button>
                </Link>
                <Link href="/help">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Safety FAQ
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Stats Section */}
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <p className="text-sm text-muted-foreground">Verified Aukiers</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.8/5</div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">&lt;24hrs</div>
              <p className="text-sm text-muted-foreground">Issue Response</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}








