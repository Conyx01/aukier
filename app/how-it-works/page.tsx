"use client"

import { useState } from "react"
import { CheckCircle2, Shield, DollarSign, MessageCircle, Star, Clock, MapPin, Users, Phone, CreditCard, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState("clients")

  const clientSteps = [
    {
      step: 1,
      title: "Post Your Job",
      description: "Describe what you need done, set your budget, and choose your timeline.",
      icon: <MessageCircle className="h-6 w-6" />,
      details: [
        "Write a clear job description",
        "Select the right category",
        "Set your budget range",
        "Choose urgency level",
        "Specify your location"
      ]
    },
    {
      step: 2,
      title: "Review Applications",
      description: "Browse Aukier profiles, read reviews, and compare proposals.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "View Aukier profiles and portfolios",
        "Check trust badges and verification",
        "Read reviews from other clients",
        "Compare skills and experience",
        "Review proposed timelines and costs"
      ]
    },
    {
      step: 3,
      title: "Choose Your Aukier",
      description: "Select the best match for your project and start communication.",
      icon: <Star className="h-6 w-6" />,
      details: [
        "Select your preferred Aukier",
        "Start direct communication",
        "Discuss project details",
        "Agree on timeline and deliverables",
        "Set up payment terms"
      ]
    },
    {
      step: 4,
      title: "Secure Payment",
      description: "Pay securely through our escrow system. Money is held until work is completed.",
      icon: <DollarSign className="h-6 w-6" />,
      details: [
        "Funds held in secure escrow",
        "Payment released upon completion",
        "Multiple payment methods available",
        "Mobile money integration",
        "Dispute resolution support"
      ]
    },
    {
      step: 5,
      title: "Work Gets Done",
      description: "Your Aukier completes the work according to your agreement.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      details: [
        "Regular progress updates",
        "Quality work delivery",
        "Timeline adherence",
        "Communication throughout",
        "Final review and approval"
      ]
    },
    {
      step: 6,
      title: "Review & Pay",
      description: "Review the completed work, release payment, and leave a review.",
      icon: <Star className="h-6 w-6" />,
      details: [
        "Review completed work",
        "Approve and release payment",
        "Leave a detailed review",
        "Rate the experience",
        "Build your network"
      ]
    }
  ]

  const aukierSteps = [
    {
      step: 1,
      title: "Create Your Profile",
      description: "Build a professional profile showcasing your skills and experience.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Add your skills and specializations",
        "Upload portfolio photos",
        "Set your hourly rates",
        "Add availability schedule",
        "Complete verification process"
      ]
    },
    {
      step: 2,
      title: "Get Verified",
      description: "Complete our trust verification process to build credibility.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Phone number verification",
        "National ID verification",
        "Address confirmation",
        "Community endorsements",
        "Local references"
      ]
    },
    {
      step: 3,
      title: "Browse Jobs",
      description: "Find jobs that match your skills and apply with proposals.",
      icon: <MessageCircle className="h-6 w-6" />,
      details: [
        "Filter jobs by category and location",
        "Read job descriptions carefully",
        "Submit detailed proposals",
        "Highlight relevant experience",
        "Propose realistic timelines"
      ]
    },
    {
      step: 4,
      title: "Get Hired",
      description: "Communicate with clients and secure the job.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      details: [
        "Respond to client questions",
        "Negotiate terms and pricing",
        "Agree on project scope",
        "Set clear expectations",
        "Confirm start date"
      ]
    },
    {
      step: 5,
      title: "Complete Work",
      description: "Deliver quality work according to the agreed terms.",
      icon: <Clock className="h-6 w-6" />,
      details: [
        "Follow project timeline",
        "Maintain communication",
        "Provide progress updates",
        "Deliver quality results",
        "Meet client expectations"
      ]
    },
    {
      step: 6,
      title: "Get Paid",
      description: "Receive secure payment and build your reputation.",
      icon: <DollarSign className="h-6 w-6" />,
      details: [
        "Payment released upon completion",
        "Multiple payment options",
        "Mobile money integration",
        "Build positive reviews",
        "Grow your client base"
      ]
    }
  ]

  const trustFeatures = [
    {
      title: "Identity Verification",
      description: "All Aukiers are verified through phone, national ID, and address confirmation.",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Community Endorsements",
      description: "Local community members can vouch for Aukiers they know and trust.",
      icon: <Users className="h-5 w-5" />
    },
    {
      title: "Secure Payments",
      description: "All payments are held in escrow until work is completed to your satisfaction.",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      title: "Review System",
      description: "Read reviews from other clients to make informed decisions.",
      icon: <Star className="h-5 w-5" />
    }
  ]

  const paymentMethods = [
    {
      name: "Mobile Money",
      description: "Mpamba, Airtel Money, and other mobile payment options",
      icon: <Phone className="h-5 w-5" />
    },
    {
      name: "Bank Transfer",
      description: "Direct bank transfers for larger amounts",
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      name: "Cash on Delivery",
      description: "Pay in cash when work is completed (for local jobs)",
      icon: <DollarSign className="h-5 w-5" />
    }
  ]

  const faqs = [
    {
      question: "How do I know if an Aukier is trustworthy?",
      answer: "All Aukiers go through our verification process including phone verification, national ID confirmation, and address verification. You can also check their trust badges, read reviews from other clients, and see community endorsements from people who know them personally."
    },
    {
      question: "How does payment work?",
      answer: "We use a secure escrow system. When you hire an Aukier, your payment is held securely until the work is completed to your satisfaction. Only then is the payment released to the Aukier. This protects both parties."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "If you're not satisfied with the completed work, you can request revisions or dispute the payment. Our support team will help mediate any issues and ensure a fair resolution for both parties."
    },
    {
      question: "Can I hire Aukiers for ongoing work?",
      answer: "Absolutely! Many clients build long-term relationships with Aukiers for regular maintenance, ongoing projects, or recurring services. You can save your favorite Aukiers and hire them again easily."
    },
    {
      question: "How do I become an Aukier?",
      answer: "Simply sign up and create your profile. Add your skills, upload portfolio photos, set your rates, and complete the verification process. Once verified, you can start browsing and applying for jobs that match your skills."
    },
    {
      question: "What if an Aukier doesn't show up?",
      answer: "If an Aukier doesn't show up for a scheduled job, you can cancel the job and your payment will be refunded. You can then hire a different Aukier. We track reliability and this affects the Aukier's reputation on the platform."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How Aukier Works</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with trusted skilled workers across Malawi. Whether you need work done or want to offer your services, 
            Aukier makes it simple, secure, and reliable.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="clients" className="text-base">
              For Clients
            </TabsTrigger>
            <TabsTrigger value="aukiers" className="text-base">
              For Aukiers
            </TabsTrigger>
          </TabsList>

          {/* Client Process */}
          <TabsContent value="clients" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">How to Hire an Aukier</h2>
              <p className="text-muted-foreground">
                Follow these simple steps to find and hire the perfect skilled worker for your project.
              </p>
            </div>

            <div className="grid gap-8">
              {clientSteps.map((step, index) => (
                <Card key={step.step} className="relative">
                  <div className="flex items-start gap-6 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-sm">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < clientSteps.length - 1 && (
                    <div className="absolute left-6 top-20 w-px h-8 bg-border"></div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Aukier Process */}
          <TabsContent value="aukiers" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">How to Become an Aukier</h2>
              <p className="text-muted-foreground">
                Start earning by offering your skills and services to clients across Malawi.
              </p>
            </div>

            <div className="grid gap-8">
              {aukierSteps.map((step, index) => (
                <Card key={step.step} className="relative">
                  <div className="flex items-start gap-6 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-sm">
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < aukierSteps.length - 1 && (
                    <div className="absolute left-6 top-20 w-px h-8 bg-border"></div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Trust & Safety */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Trust & Safety</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've built multiple layers of trust to ensure safe and reliable transactions for everyone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Payment Options</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We support multiple payment methods to make transactions convenient for everyone.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{method.name}</h3>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Here are the most common questions about using Aukier.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of clients and Aukiers who are already using our platform to connect and get work done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="/post-job">Post a Job</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/browse">Browse Aukiers</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/signup">Become an Aukier</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}








