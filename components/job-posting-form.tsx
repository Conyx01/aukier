"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, X } from "lucide-react"
import { format } from "date-fns"

const categories = [
  "Plumbing",
  "Electrical",
  "Carpentry",
  "Painting",
  "Tech & IT",
  "Photography",
  "Transport",
  "Events",
  "Other",
]

export function JobPostingForm() {
  const [date, setDate] = useState<Date>()
  const [attachments, setAttachments] = useState<string[]>([])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newFiles = Array.from(files).map((file) => file.name)
      setAttachments([...attachments, ...newFiles])
    }
  }

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index))
  }

  return (
    <form className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g., Fix kitchen sink leak" />
              <p className="text-xs text-muted-foreground">Be specific about what you need done</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the work you need done, including any specific requirements or preferences..."
                className="min-h-32"
              />
              <p className="text-xs text-muted-foreground">Minimum 50 characters</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g., Lilongwe Area 3" />
              </div>

              <div className="space-y-2">
                <Label>Preferred Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Budget</Label>
              <RadioGroup defaultValue="fixed">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <Label htmlFor="fixed" className="font-normal">
                    Fixed Price
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hourly" id="hourly" />
                  <Label htmlFor="hourly" className="font-normal">
                    Hourly Rate
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="min-budget">Minimum Budget (MWK)</Label>
                <Input id="min-budget" type="number" placeholder="5,000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-budget">Maximum Budget (MWK)</Label>
                <Input id="max-budget" type="number" placeholder="10,000" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Attachments (Optional)</Label>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileUpload}
                    accept="image/*,.pdf"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("file-upload")?.click()}
                    className="gap-2"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photos or Documents
                  </Button>
                </div>
                {attachments.length > 0 && (
                  <div className="space-y-2">
                    {attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md border border-border p-2"
                      >
                        <span className="text-sm truncate">{file}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => removeAttachment(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Upload photos or documents to help Aukiers understand your needs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <h3 className="font-semibold">Additional Preferences</h3>

            <div className="space-y-2">
              <Label htmlFor="experience">Required Experience Level</Label>
              <Select>
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Level</SelectItem>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="expert">Expert (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Estimated Duration</Label>
              <Select>
                <SelectTrigger id="duration">
                  <SelectValue placeholder="How long will this take?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="few-hours">A few hours</SelectItem>
                  <SelectItem value="1-day">1 day</SelectItem>
                  <SelectItem value="2-3-days">2-3 days</SelectItem>
                  <SelectItem value="1-week">1 week</SelectItem>
                  <SelectItem value="more">More than 1 week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button type="button" variant="outline" className="sm:w-auto bg-transparent">
          Save as Draft
        </Button>
        <Button type="submit" className="sm:w-auto">
          Post Job
        </Button>
      </div>

      <div className="rounded-lg bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          By posting a job, you agree to Aukier's Terms of Service and Privacy Policy. Your job will be visible to
          verified Aukiers in your area.
        </p>
      </div>
    </form>
  )
}
