"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="text-left">
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              How work should work in <span className="text-primary">Africa</span>
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
              Forget the old rules. You can have the best people. Right now. Right here.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-8">
                Find Talent
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent">
                Post Work
              </Button>
            </div>

            <div className="mt-12">
              <p className="text-sm text-muted-foreground">Trusted by</p>
              <div className="mt-4 flex flex-wrap items-center gap-6 opacity-60">
                <div className="text-lg font-semibold">Airtel</div>
                <div className="text-lg font-semibold">TNM</div>
                <div className="text-lg font-semibold">Standard Bank</div>
                <div className="text-lg font-semibold">FDH Bank</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
              <Image
                src="/hero-illustration.jpg"
                alt="Diverse African workers in a circle"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
