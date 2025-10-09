import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TalentCTASection() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative h-[300px] md:h-auto">
              <Image src="/talent-working.jpg" alt="Talent working on laptop" fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 text-white">
              <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium w-fit">
                For talent
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">Find great work</h2>
              <p className="mt-4 text-white/90">
                Meet clients you're excited to work with and take your career or business to new heights.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <h3 className="font-semibold">Find opportunities</h3>
                  <p className="mt-1 text-sm text-white/80">for every stage of your freelance career</p>
                </div>
                <div>
                  <h3 className="font-semibold">Control when</h3>
                  <p className="mt-1 text-sm text-white/80">where, and how you work</p>
                </div>
                <div>
                  <h3 className="font-semibold">Explore different</h3>
                  <p className="mt-1 text-sm text-white/80">ways to earn</p>
                </div>
              </div>

              <Button size="lg" variant="secondary" className="mt-8 w-fit">
                Find Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
