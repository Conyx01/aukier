import { JobPostingForm } from "@/components/job-posting-form"
import { MobileNav } from "@/components/mobile-nav"

export default function PostJobPage() {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <main className="container mx-auto max-w-3xl px-4 py-6">
        <div className="mb-6">
          <h1 className="text-balance text-3xl font-bold">Post a Job</h1>
          <p className="mt-2 text-muted-foreground">
            Tell us what you need and connect with skilled Aukiers in your area
          </p>
        </div>
        <JobPostingForm />
      </main>
    </div>
  )
}
