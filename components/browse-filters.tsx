"use client"

import { Search, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface BrowseFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedLocation: string
  setSelectedLocation: (location: string) => void
  sortBy: string
  setSortBy: (sort: string) => void
  resultCount: number
}

export function BrowseFilters({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedLocation,
  setSelectedLocation,
  sortBy,
  setSortBy,
  resultCount,
}: BrowseFiltersProps) {
  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name, skills, or keywords..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-12"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Category Filter */}
        <div className="flex-1">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="h-12">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="All Categories" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              <SelectItem value="carpentry">Carpentry</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="construction">Construction</SelectItem>
              <SelectItem value="mechanical">Mechanical</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
              <SelectItem value="tutoring">Tutoring</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="flex-1">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Locations">All Locations</SelectItem>
              <SelectItem value="Lilongwe">Lilongwe</SelectItem>
              <SelectItem value="Blantyre">Blantyre</SelectItem>
              <SelectItem value="Mzuzu">Mzuzu</SelectItem>
              <SelectItem value="Zomba">Zomba</SelectItem>
              <SelectItem value="Kasungu">Kasungu</SelectItem>
              <SelectItem value="Mangochi">Mangochi</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Filter */}
        <div className="flex-1">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="h-12">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
                <SelectValue placeholder="Sort By" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price">Lowest Price</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
              <SelectItem value="trust">Trust Score</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Showing <strong className="text-foreground">{resultCount}</strong>{" "}
          Aukiers
        </span>
      </div>
    </div>
  )
}








