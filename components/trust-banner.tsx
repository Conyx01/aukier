import { Shield, Users, Award, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Active Aukiers" },
  { icon: Award, value: "50,000+", label: "Jobs Completed" },
  { icon: Shield, value: "99.5%", label: "Satisfaction Rate" },
  { icon: TrendingUp, value: "4.8/5", label: "Average Rating" },
]

export function TrustBanner() {
  return (
    <section className="bg-secondary px-4 py-12 text-secondary-foreground md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-balance text-2xl font-bold md:text-3xl">Trusted by thousands across Malawi</h2>
          <p className="mt-2 text-secondary-foreground/80">
            Building a community of skilled workers and satisfied clients
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <Icon className="h-8 w-8 md:h-10 md:w-10" />
                <div className="mt-3 text-3xl font-bold md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-secondary-foreground/80">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
