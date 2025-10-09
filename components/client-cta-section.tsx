import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function ClientCTASection() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0">
            <Image src="/client-workspace.jpg" alt="Client workspace" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
          </div>

          <div className="relative px-8 py-12 md:px-12 md:py-16">
            <div className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary-foreground w-fit">
              For Clients
            </div>
            <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">Find talent your way</h2>
            <p className="mt-4 max-w-2xl text-white/90">
              Work with the largest network of independent professionals and get things done—from quick turnarounds to
              big transformations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Card className="bg-primary hover:bg-primary/90 transition-colors cursor-pointer border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary-foreground">Post a job and hire a pro</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">Talent Marketplace</p>
                  <ArrowRight className="mt-4 h-5 w-5 text-primary-foreground" />
                </CardContent>
              </Card>

              <Card className="bg-card hover:bg-muted transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold">Browse and buy projects</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Project Catalog</p>
                  <ArrowRight className="mt-4 h-5 w-5" />
                </CardContent>
              </Card>

              <Card className="bg-card hover:bg-muted transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold">Let us help you find the right talent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Talent Scout</p>
                  <ArrowRight className="mt-4 h-5 w-5" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
