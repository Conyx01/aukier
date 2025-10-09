import { CheckCircle2, Shield, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function WhyAukierSection() {
  return (
    <section className="bg-muted/30 px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-balance text-3xl font-bold md:text-4xl">Why businesses turn to Aukier</h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Proof of quality</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Check any pro's work samples, client reviews, and identity verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">No cost until you hire</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Interview potential fits for your job, negotiate rates, and only pay for work you approve.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Safe and secure</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Focus on your work knowing we help protect your data and privacy. We're here with 24/7 support if
                    you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/why-aukier-illustration.jpg"
                alt="Worker illustration"
                width={300}
                height={300}
                className="object-contain"
              />

              <Card className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary shadow-xl border-0 w-[200px]">
                <CardContent className="p-6 text-center text-primary-foreground">
                  <h3 className="text-lg font-bold">We're the world's work marketplace</h3>
                  <div className="mt-4 flex items-center justify-center gap-1">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    <span className="text-2xl font-bold">4.9/5</span>
                  </div>
                  <p className="mt-2 text-xs opacity-90">Clients rate professionals on Aukier</p>

                  <div className="mt-6 rounded-lg bg-primary-foreground/20 p-3">
                    <Award className="mx-auto h-8 w-8" />
                    <p className="mt-2 text-sm font-semibold">Award winner</p>
                    <p className="text-xs opacity-90">G2's 2023 Best Software Awards</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
