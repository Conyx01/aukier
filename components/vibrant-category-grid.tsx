"use client"

import { Card } from "@/components/ui/card"
import { Wrench, Zap, Paintbrush, Code, Camera, Truck, Scissors, Home, ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Plumbing & Electrical",
    icon: Wrench,
    count: "2,400+",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-50",
  },
  {
    name: "Construction & Repair",
    icon: Home,
    count: "3,100+",
    color: "from-orange-500 to-amber-400",
    bgColor: "bg-orange-50",
  },
  {
    name: "Design & Creative",
    icon: Paintbrush,
    count: "1,800+",
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-50",
  },
  {
    name: "Tech & Development",
    icon: Code,
    count: "1,200+",
    color: "from-purple-500 to-indigo-400",
    bgColor: "bg-purple-50",
  },
  {
    name: "Photography & Video",
    icon: Camera,
    count: "900+",
    color: "from-green-500 to-emerald-400",
    bgColor: "bg-green-50",
  },
  {
    name: "Transport & Delivery",
    icon: Truck,
    count: "1,500+",
    color: "from-red-500 to-orange-400",
    bgColor: "bg-red-50",
  },
  {
    name: "Beauty & Grooming",
    icon: Scissors,
    count: "800+",
    color: "from-yellow-500 to-amber-400",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Electrical Work",
    icon: Zap,
    count: "1,100+",
    color: "from-indigo-500 to-blue-400",
    bgColor: "bg-indigo-50",
  },
]

export function VibrantCategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-white relative">
      {/* Section header */}
      <div className="container px-4 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-3 text-black">Find Your Aukier</h2>
            <p className="text-lg text-gray-600 font-medium">Browse by category. Real skills. Real people.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-black font-bold hover:gap-3 transition-all">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Category grid */}
      <div className="container px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={category.name}
                className={`${category.bgColor} border-2 border-black/10 hover:border-black hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden relative`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="p-6 relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Category name */}
                  <h3 className="font-bold text-lg mb-2 text-black group-hover:translate-x-1 transition-transform duration-300">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-sm font-bold text-gray-600">{category.count} Aukiers</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Mobile view all button */}
      <div className="container px-4 mt-8 md:hidden">
        <button className="w-full flex items-center justify-center gap-2 bg-black text-white font-bold py-4 rounded-xl hover:bg-black/90 transition-colors">
          View All Categories
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}
