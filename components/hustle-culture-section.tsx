"use client"

import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Shield, Clock } from "lucide-react"

export function HustleCultureSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 pattern-diagonal text-white" />

      <div className="container px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/hustle-1.jpg"
                  alt="African worker"
                  className="rounded-2xl shadow-2xl w-full aspect-square object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
                />
                <div className="bg-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                    <span className="font-black text-2xl text-black">4.9</span>
                  </div>
                  <p className="text-sm font-bold text-gray-600">Average Rating</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-black text-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="font-black text-3xl mb-2">50K+</div>
                  <p className="text-sm font-bold text-white/80">Jobs Done</p>
                </div>
                <img
                  src="/hustle-2.jpg"
                  alt="African entrepreneur"
                  className="rounded-2xl shadow-2xl w-full aspect-square object-cover border-4 border-white transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Built for the
              <br />
              <span className="bg-white text-black px-3 inline-block transform -rotate-1">African Hustle</span>
            </h2>

            <p className="text-xl font-bold mb-8 text-white/90 leading-relaxed">
              We get it. You're grinding. You need work done fast, or you need to find work fast. No time for
              complicated platforms. Just real people, real skills, real results.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-1">Get Paid Fast</h3>
                  <p className="text-white/80 font-medium">Mobile money, instant transfers. Your money, your way.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-1">Trust & Safety</h3>
                  <p className="text-white/80 font-medium">Verified profiles, real reviews from real people.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg mb-1">Work on Your Time</h3>
                  <p className="text-white/80 font-medium">Set your hours, choose your jobs, build your reputation.</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-black rounded-xl px-8 h-14 text-base"
            >
              Start Your Hustle Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
