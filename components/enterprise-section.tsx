import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function EnterpriseSection() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-2xl bg-muted/50">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
                For enterprise
              </div>
              <h2 className="text-balance text-3xl font-bold md:text-4xl">Scale with Enterprise Suite</h2>
              <p className="mt-4 text-muted-foreground">
                A fast and secure way to achieve long-term success for your business goals.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Access expert talent to fill your skill gaps</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Control your workflow: hire, classify and pay your talent</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Partner with Aukier for end-to-end support</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="mt-8 w-fit">
                Learn More
              </Button>
            </div>

            <div className="relative h-[300px] md:h-auto">
              <Image src="/enterprise-worker.jpg" alt="Professional working on laptop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
