"use client"

import { Card } from "@/components/ui/card"
import { Star, MapPin, CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Chisomo Banda",
    role: "Electrician",
    location: "Lilongwe",
    image: "/testimonial-1.jpg",
    rating: 5,
    quote:
      "I've tripled my income since joining Aukier. Clients find me easily, and I get paid on time. This platform changed my life.",
    verified: true,
  },
  {
    name: "Grace Mwale",
    role: "Graphic Designer",
    location: "Blantyre",
    image: "/testimonial-2.jpg",
    rating: 5,
    quote:
      "As a young designer, Aukier gave me the opportunity to work with businesses across Malawi. The trust system works!",
    verified: true,
  },
  {
    name: "Patrick Phiri",
    role: "Small Business Owner",
    location: "Mzuzu",
    image: "/testimonial-3.jpg",
    rating: 5,
    quote:
      "Finding reliable workers used to be a nightmare. Now I have a network of trusted Aukiers I can call anytime.",
    verified: true,
  },
]

export function CommunityProofSection() {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black">Real People. Real Stories.</h2>
          <p className="text-xl text-gray-600 font-bold max-w-2xl mx-auto">
            Don't just take our word for it. Hear from Aukiers and clients building their future.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-white border-2 border-black/10 hover:border-black hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 font-medium mb-6 leading-relaxed">"{testimonial.quote}"</p>

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-black"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-black text-black">{testimonial.name}</h4>
                      {testimonial.verified && <CheckCircle className="w-4 h-4 text-green-500" fill="currentColor" />}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">12K+</div>
              <p className="text-black/80 font-bold">Active Aukiers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">50K+</div>
              <p className="text-black/80 font-bold">Jobs Completed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">4.9</div>
              <p className="text-black/80 font-bold">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-black mb-2">15+</div>
              <p className="text-black/80 font-bold">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
