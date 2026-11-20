"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, MapPin, DollarSign, Clock, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const jobCategories = [
  { id: "plumbing", name: "Plumbing", icon: "🔧", description: "Pipe installation, repairs, maintenance" },
  { id: "electrical", name: "Electrical", icon: "⚡", description: "Wiring, installations, repairs" },
  { id: "carpentry", name: "Carpentry", icon: "🪚", description: "Furniture, construction, repairs" },
  { id: "mechanical", name: "Mechanical", icon: "🔩", description: "Vehicle repairs, machinery" },
  { id: "design", name: "Design", icon: "🎨", description: "Graphic design, web design, branding" },
  { id: "development", name: "Development", icon: "💻", description: "Software development, web apps" },
  { id: "cleaning", name: "Cleaning", icon: "🧹", description: "House cleaning, office cleaning" },
  { id: "gardening", name: "Gardening", icon: "🌱", description: "Landscaping, maintenance" },
  { id: "other", name: "Other Services", icon: "🛠️", description: "Other skilled services" }
]

const urgencyLevels = [
  { id: "low", name: "Low", description: "Can wait a few days", color: "bg-green-100 text-green-800" },
  { id: "medium", name: "Medium", description: "Within 1-2 days", color: "bg-yellow-100 text-yellow-800" },
  { id: "high", name: "High", description: "Same day or urgent", color: "bg-orange-100 text-orange-800" },
  { id: "urgent", name: "Urgent", description: "Immediate attention needed", color: "bg-red-100 text-red-800" }
]

const budgetRanges = [
  { id: "under-5000", name: "Under MWK 5,000", min: 0, max: 5000 },
  { id: "5000-10000", name: "MWK 5,000 - 10,000", min: 5000, max: 10000 },
  { id: "10000-25000", name: "MWK 10,000 - 25,000", min: 10000, max: 25000 },
  { id: "25000-50000", name: "MWK 25,000 - 50,000", min: 25000, max: 50000 },
  { id: "over-50000", name: "Over MWK 50,000", min: 50000, max: 999999 },
  { id: "negotiable", name: "Negotiable", min: 0, max: 0 }
]

const locations = [
  "Lilongwe",
  "Blantyre", 
  "Mzuzu",
  "Zomba",
  "Kasungu",
  "Mangochi",
  "Other"
]

const formSchema = z.object({
  title: z.string().min(10, "Job title must be at least 10 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  category: z.string().min(1, "Please select a category"),
  budget: z.string().min(1, "Please select a budget range"),
  urgency: z.string().min(1, "Please select urgency level"),
  location: z.string().min(1, "Please select a location"),
  specificArea: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  skills: z.array(z.string()).min(1, "Please select at least one required skill"),
  contactMethod: z.string().min(1, "Please select preferred contact method"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  additionalRequirements: z.string().optional()
})

type FormData = z.infer<typeof formSchema>

export default function PostJobPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      budget: "",
      urgency: "",
      location: "",
      specificArea: "",
      timeline: "",
      skills: [],
      contactMethod: "",
      phoneNumber: "",
      additionalRequirements: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log("Job posted:", data)
      
      // Redirect to success page or jobs list
      router.push("/jobs?posted=true")
    } catch (error) {
      console.error("Error posting job:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
    form.setValue("skills", selectedSkills.includes(skill) 
      ? selectedSkills.filter(s => s !== skill)
      : [...selectedSkills, skill]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Post a Job</h1>
          <p className="text-muted-foreground">
            Find the right Aukier for your project. Be specific about your requirements.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Job Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Title *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Fix leaking kitchen sink" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the job in detail. What needs to be done? What are your expectations?"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {jobCategories.map((category) => (
                              <SelectItem key={category.id} value={category.id}>
                                <div className="flex items-center gap-2">
                                  <span>{category.icon}</span>
                                  <span>{category.name}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="urgency"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Urgency Level *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {urgencyLevels.map((level) => (
                              <SelectItem key={level.id} value={level.id}>
                                <div className="flex items-center gap-2">
                                  <Badge className={level.color}>
                                    {level.name}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">
                                    {level.description}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Budget & Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Budget & Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.id} value={range.id}>
                              {range.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>When do you need this done? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="this-week">This week</SelectItem>
                          <SelectItem value="next-week">Next week</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {locations.map((location) => (
                              <SelectItem key={location} value={location}>
                                {location}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specificArea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specific Area (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., Area 3, Ndirande, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Required Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Plumbing", "Electrical", "Carpentry", "Mechanical", 
                    "Design", "Development", "Cleaning", "Gardening",
                    "Painting", "Tiling", "Roofing", "Welding"
                  ].map((skill) => (
                    <Button
                      key={skill}
                      type="button"
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      size="sm"
                      onClick={() => toggleSkill(skill)}
                      className="justify-start"
                    >
                      {selectedSkills.includes(skill) && (
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                      )}
                      {skill}
                    </Button>
                  ))}
                </div>
                {form.formState.errors.skills && (
                  <p className="text-sm text-destructive mt-2">
                    {form.formState.errors.skills.message}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+265 991 234 567" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Contact Method *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="message">Platform Message</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="additionalRequirements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Requirements (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special requirements, materials needed, or additional information..."
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => router.back()}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? "Posting..." : "Post Job"}
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  )
}