"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ReviewsFilter() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="bg-transparent">
          All
        </Button>
        <Button variant="outline" size="sm" className="bg-transparent">
          5 Stars
        </Button>
        <Button variant="outline" size="sm" className="bg-transparent">
          4 Stars
        </Button>
        <Button variant="outline" size="sm" className="bg-transparent">
          3 Stars
        </Button>
        <Button variant="outline" size="sm" className="bg-transparent">
          With Photos
        </Button>
      </div>
      <Select defaultValue="recent">
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recent">Most Recent</SelectItem>
          <SelectItem value="highest">Highest Rated</SelectItem>
          <SelectItem value="lowest">Lowest Rated</SelectItem>
          <SelectItem value="helpful">Most Helpful</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
