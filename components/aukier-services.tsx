import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const services = [
  {
    name: "Pipe Installation & Repair",
    description: "Complete pipe installation, replacement, and leak repairs for all types of plumbing systems.",
    price: "From MWK 3,000",
  },
  {
    name: "Drain Cleaning & Unclogging",
    description: "Professional drain cleaning services for sinks, toilets, and main sewer lines.",
    price: "From MWK 2,500",
  },
  {
    name: "Water Heater Services",
    description: "Installation, repair, and maintenance of electric and gas water heaters.",
    price: "From MWK 8,000",
  },
  {
    name: "Bathroom & Kitchen Fitting",
    description: "Complete bathroom and kitchen plumbing installations including fixtures and fittings.",
    price: "From MWK 15,000",
  },
]

export function AukierServices() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Services Offered</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.name} className="flex gap-3 border-b border-border pb-4 last:border-0 last:pb-0">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-semibold">{service.name}</h3>
                  <span className="text-sm font-semibold text-primary">{service.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
