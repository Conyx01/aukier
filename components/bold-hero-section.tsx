"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"

export function BoldHeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/auk-hero.png"
          alt="African skilled workers - carpenter, hairstylist, and mechanic"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content overlay */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Connecting skilled workers to opportunities across Africa
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Find trusted Aukiers ready to deliver quality work. From plumbers to developers.
          </p>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 mb-8">
            <div className="flex gap-4 mb-4">
              <button className="text-base font-semibold text-gray-900 pb-2 border-b-2 border-gray-900">
                Find talent
              </button>
              <button className="text-base font-semibold text-gray-500 pb-2 hover:text-gray-900">Browse jobs</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by role, skills, or keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-base bg-transparent placeholder:text-gray-400"
                />
              </div>
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-8 h-12">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8 text-white/80 text-sm">
            <span className="font-medium">Trusted by:</span>
            <div className="flex flex-wrap items-center gap-6">
              <span className="font-semibold text-white">Airtel</span>
              <span className="font-semibold text-white">TNM</span>
              <span className="font-semibold text-white">Standard Bank</span>
              <span className="font-semibold text-white">FDH Bank</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
