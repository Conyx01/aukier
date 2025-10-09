"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Users } from "lucide-react"

export function DualCTASection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* For Clients */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-12 group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 opacity-10 pattern-dots text-white" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Need Work Done?</h3>

              <p className="text-lg text-white/90 font-bold mb-8 leading-relaxed">
                Post your job in minutes. Get proposals from verified Aukiers. Choose the best fit. Pay securely.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Post jobs for free
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Get proposals in hours
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Secure payment protection
                </li>
              </ul>

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 font-black rounded-xl px-8 h-14 text-base w-full md:w-auto"
              >
                Post a Job
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* For Aukiers */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-500 p-8 md:p-12 group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 opacity-10 pattern-dots text-white" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to Hustle?</h3>

              <p className="text-lg text-white/90 font-bold mb-8 leading-relaxed">
                Create your profile. Showcase your skills. Get hired by clients who value your work.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Free to join & create profile
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Set your own rates & hours
                </li>
                <li className="flex items-center gap-3 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-black">✓</span>
                  </div>
                  Get paid fast via mobile money
                </li>
              </ul>

              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-black rounded-xl px-8 h-14 text-base w-full md:w-auto"
              >
                Start Earning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
