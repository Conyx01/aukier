"use client"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

export function BoldHeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="w-full px-0 md:px-4 lg:px-6 py-0 md:py-6">
      <section className="relative min-h-[600px] md:min-h-[700px] flex flex-col md:flex-row md:items-center overflow-hidden md:rounded-2xl">
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

        {/* Mobile Layout - Flex column with centered headline and bottom CTA */}
        <div className="flex-1 flex flex-col md:hidden relative z-10 min-h-[600px]">
          {/* Left-aligned headline with space above */}
          <div className="flex-1 flex items-end px-4 pt-8 pb-8">
            <div className="text-left w-full">
              <TypewriterEffect 
                words={[
                  { text: "Connecting", className: "text-white" },
                  { text: "skilled", className: "text-white" },
                  { text: "workers", className: "text-white" },
                  { text: "to", className: "text-white" },
                  { text: "opportunities", className: "text-white" },
                  { text: "across", className: "text-white" },
                  { text: "Africa", className: "text-white" }
                ]}
                className="text-3xl font-semibold leading-tight text-white"
              />
            </div>
          </div>
          
          {/* CTA Card anchored at bottom - no margin/padding below */}
          <div className="bg-black/80 backdrop-blur-sm shadow-2xl p-4">
            <div className="flex gap-4 mb-4">
              <button className="text-sm font-semibold text-white pb-2 border-b-2 border-white">
                Find talent
              </button>
              <button className="text-sm font-semibold text-white/70 pb-2 hover:text-white">
                Browse jobs
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg">
                <Search className="w-5 h-5 text-white/60" />
                <input
                  type="text"
                  placeholder="Search by role, skills, or keywords"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-sm bg-transparent placeholder:text-white/60 text-white"
                />
              </div>
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg px-8 h-12"
              >
                Search
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-xs pt-4 border-t border-white/20">
              <span className="font-medium">Trusted by:</span>
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-semibold text-white">Airtel</span>
                <span className="font-semibold text-white">TNM</span>
                <span className="font-semibold text-white">Standard Bank</span>
                <span className="font-semibold text-white">FDH Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original centered layout */}
        <div className="hidden md:flex items-center h-full w-full">
          <div className="w-full relative z-10 px-4 py-8 md:py-24 md:container">
            <div className="max-w-2xl">
              <div className="text-left">
                <TypewriterEffect 
                  words={[
                    { text: "Connecting", className: "text-white"  },
                    { text: "skilled", className: "text-white" },
                    { text: "workers", className: "text-white" },
                    { text: "to", className: "text-white" },
                    { text: "opportunities", className: "text-white" },
                    { text: "across", className: "text-white" },
                    { text: "Africa", className: "text-white" }
                  ]}
                  className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4 md:mb-6 text-white"
                />
              </div>

              <p className="text-lg md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed">
                Find trusted Aukiers ready to deliver quality work. From plumbers to developers.
              </p>

              <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 mb-6 md:mb-8">
                <div className="flex gap-4 mb-4">
                  <button className="text-base font-semibold text-gray-900 pb-2 border-b-2 border-gray-900">
                    Find talent
                  </button>
                  <button className="text-base font-semibold text-gray-500 pb-2 hover:text-gray-900">
                    Browse jobs
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by role, skills, or keywords"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 outline-none text-base bg-transparent placeholder:text-gray-400 text-gray-900"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg px-8 h-12"
                  >
                    Search
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-8 text-gray-600 text-sm pt-4 border-t border-gray-200">
                  <span className="font-medium">Trusted by:</span>
                  <div className="flex flex-wrap items-center gap-6">
                    <span className="font-semibold text-gray-900">Airtel</span>
                    <span className="font-semibold text-gray-900">TNM</span>
                    <span className="font-semibold text-gray-900">Standard Bank</span>
                    <span className="font-semibold text-gray-900">FDH Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
