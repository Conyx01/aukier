"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronDown, HelpCircle, BookOpen, MessageSquare, Mail } from "lucide-react"
import Link from "next/link"

export default function HelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: BookOpen,
      faqs: [
        {
          q: "How do I create an account?",
          a: "Simply click 'Sign Up' in the top right corner and follow the prompts. You can sign up as either a client looking for talent or an Aukier offering services."
        },
        {
          q: "How do I verify my account?",
          a: "We'll send you a verification code via SMS to your phone number. Enter the code to verify your account. As an Aukier, you'll also need to verify your national ID."
        },
        {
          q: "What information do I need to complete my profile?",
          a: "For clients: Name, phone, and location. For Aukiers: Skills, portfolio, availability, hourly rate, and payment methods."
        },
        {
          q: "Is it free to sign up?",
          a: "Yes, signing up is completely free. Clients can post unlimited jobs for free, while Aukiers can choose a subscription plan starting at MWK 2,000/month."
        }
      ]
    },
    {
      id: "for-clients",
      title: "For Clients",
      icon: HelpCircle,
      faqs: [
        {
          q: "How do I post a job?",
          a: "Click 'Post a Job' in the navigation menu, fill in the job details including description, budget, timeline, and requirements, then publish your job posting."
        },
        {
          q: "How do I find the right Aukier for my job?",
          a: "Use our browse page to filter by category, location, rating, and price. Read reviews, check portfolios, and compare profiles to find the perfect match."
        },
        {
          q: "How does payment work?",
          a: "All payments go through our secure escrow system. You fund the payment upfront, and funds are released to the Aukier only after job completion and your approval."
        },
        {
          q: "What if I'm not satisfied with the work?",
          a: "You can request revisions or file a dispute within 7 days of job completion. Our team will review the case and mediate a fair resolution."
        },
        {
          q: "Can I hire the same Aukier again?",
          a: "Yes! Once you find a trusted Aukier, you can easily contact them through your message history and hire them again for future projects."
        }
      ]
    },
    {
      id: "for-aukiers",
      title: "For Aukiers",
      icon: MessageSquare,
      faqs: [
        {
          q: "How do I get more clients?",
          a: "Complete your profile, add a professional portfolio, maintain high ratings, respond quickly to messages, and consider upgrading to Aukier Pro for better visibility."
        },
        {
          q: "How do I receive payments?",
          a: "You can receive payments via mobile money (Mpamba, Airtel Money) or bank transfer. Funds are released after client approval, typically within 48 hours."
        },
        {
          q: "What happens if a client doesn't pay?",
          a: "All payments are secured in escrow before work begins. You'll be paid automatically once the client approves the work, or you can file a dispute if needed."
        },
        {
          q: "Can I set my own rates?",
          a: "Yes, you set your own hourly rate. Consider market rates and your experience level when setting your price."
        },
        {
          q: "How do reviews work?",
          a: "Clients can leave reviews after job completion. Responding to reviews positively can improve your profile visibility and client trust."
        }
      ]
    },
    {
      id: "safety",
      title: "Safety & Trust",
      icon: BookOpen,
      faqs: [
        {
          q: "How do you verify Aukiers?",
          a: "We verify phone numbers, national IDs, and addresses. Aukiers can also get community endorsements and local references to build their trust profile."
        },
        {
          q: "What is the trust score?",
          a: "Trust scores are calculated based on verification, reviews, community endorsements, and transaction history. Higher scores mean more trust."
        },
        {
          q: "How do I report a safety concern?",
          a: "Contact our support team immediately if you encounter harassment, fraud, or any suspicious behavior. We investigate every report within 24 hours."
        },
        {
          q: "Is my personal information safe?",
          a: "Yes, we never share your personal information with third parties. Contact information remains protected until both parties agree to share it."
        }
      ]
    }
  ]

  const popularArticles = [
    { title: "How to write a great job posting", link: "#" },
    { title: "Building your Aukier profile", link: "#" },
    { title: "Understanding trust scores", link: "#" },
    { title: "Payment and escrow explained", link: "#" },
    { title: "Dispute resolution process", link: "#" },
    { title: "Community endorsements guide", link: "#" }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions and get the support you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                className="pl-10 h-12"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Comprehensive guides and tutorials</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>Get instant help from our team</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>We'll respond within 24 hours</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Popular Articles */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Popular Articles</CardTitle>
            <CardDescription>Most viewed help articles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.link}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">{article.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Sections */}
        <div className="space-y-6">
          {faqCategories.map((category) => {
            const Icon = category.icon
            const isOpen = openCategory === category.id

            return (
              <Card key={category.id}>
                <CardHeader
                  className="cursor-pointer hover:bg-accent/50 transition-colors rounded-lg"
                  onClick={() => setOpenCategory(isOpen ? null : category.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-primary" />
                      <div>
                        <CardTitle>{category.title}</CardTitle>
                        <CardDescription>{category.faqs.length} articles</CardDescription>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </CardHeader>
                {isOpen && (
                  <CardContent className="pt-0 space-y-4">
                    {category.faqs.map((faq, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="font-semibold mb-2">{faq.q}</h4>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    ))}
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>

        {/* Contact Support */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>Our support team is here for you</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline">
              Schedule a Call
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}








