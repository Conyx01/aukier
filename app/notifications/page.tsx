import { NotificationsList } from "@/components/notifications-list"
import { NotificationsFilter } from "@/components/notifications-filter"
import { MobileNav } from "@/components/mobile-nav"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <MobileNav />
      <main className="container mx-auto max-w-4xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="mt-1 text-muted-foreground">Stay updated on your jobs and messages</p>
          </div>
          <NotificationsFilter />
        </div>
        <NotificationsList />
      </main>
    </div>
  )
}
