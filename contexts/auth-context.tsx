"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  name: string
  email?: string
  phone: string
  role: "client" | "aukier"
  verified: boolean
  image?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

import { useSession, signOut } from "next-auth/react"

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser({
        id: (session.user as any).id || "",
        name: session.user.name || "",
        email: session.user.email || "",
        phone: (session.user as any).phone || "",
        role: (session.user as any).role?.toLowerCase() || "client",
        verified: (session.user as any).verified || false,
        image: session.user.image || undefined,
      })
    } else if (status === "unauthenticated") {
      setUser(null)
    }
  }, [session, status])

  const login = (userData: User) => {
    // This is now handled by NextAuth signIn, but we keep it for compatibility if needed
    setUser(userData)
  }

  const logout = () => {
    signOut({ callbackUrl: "/" })
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...userData })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: status === "loading",
        isAuthenticated: status === "authenticated",
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}




