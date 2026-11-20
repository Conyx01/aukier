"use client"

import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Send, Search } from "lucide-react"

// Mock conversations data
const mockConversations = [
  {
    id: "1",
    participant: {
      id: "2",
      name: "Chisomo Banda",
      image: "/african-plumber.jpg",
      role: "aukier" as const,
    },
    lastMessage: "I can help with that plumbing issue. When would be a good time?",
    timestamp: "2 hours ago",
    unread: 2,
  },
  {
    id: "2",
    participant: {
      id: "3",
      name: "Grace Mwale",
      image: "/client-1.jpg",
      role: "client" as const,
    },
    lastMessage: "Thank you for the great work!",
    timestamp: "1 day ago",
    unread: 0,
  },
]

export default function MessagesPage() {
  const { user, isAuthenticated } = useAuth()
  const router = useRouter()
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const filteredConversations = mockConversations.filter((conv) =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Messages</h1>
          <p className="text-muted-foreground">Connect and communicate with Aukiers and clients</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`w-full p-4 text-left hover:bg-accent transition-colors ${
                      selectedConversation === conversation.id ? "bg-accent" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.participant.image} alt={conversation.participant.name} />
                        <AvatarFallback>{conversation.participant.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold truncate">{conversation.participant.name}</p>
                          {conversation.unread > 0 && (
                            <Badge variant="destructive" className="ml-2">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {selectedConversation ? (
              <>
                <CardHeader className="border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={filteredConversations.find((c) => c.id === selectedConversation)?.participant.image}
                        alt={filteredConversations.find((c) => c.id === selectedConversation)?.participant.name}
                      />
                      <AvatarFallback>
                        {filteredConversations.find((c) => c.id === selectedConversation)?.participant.name
                          .split(' ')
                          .map(n => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {filteredConversations.find((c) => c.id === selectedConversation)?.participant.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {filteredConversations.find((c) => c.id === selectedConversation)?.participant.role === "aukier"
                          ? "Aukier"
                          : "Client"}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[500px] flex flex-col">
                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={filteredConversations.find((c) => c.id === selectedConversation)?.participant.image}
                          />
                          <AvatarFallback>CB</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-sm">
                              {filteredConversations.find((c) => c.id === selectedConversation)?.lastMessage}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="border-t p-4">
                      <div className="flex gap-2">
                        <Input placeholder="Type a message..." className="flex-1" />
                        <Button>
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-[500px]">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Select a conversation to start messaging</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}




