import { Search, MessageSquare, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find an Aukier",
    description: "Search by service, location, and ratings to find the perfect match for your needs.",
  },
  {
    icon: MessageSquare,
    title: "Connect & Discuss",
    description: "Message directly, discuss your project details, and agree on terms before starting.",
  },
  {
    icon: CheckCircle,
    title: "Get It Done",
    description: "Work gets completed, you review the Aukier, and build lasting trust in the community.",
  },
]

export function HowItWorks() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold md:text-3xl">How Aukier works</h2>
          <p className="mt-2 text-muted-foreground">Simple, transparent, and built on trust</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-pretty text-muted-foreground">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
