"use client"

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"

interface User {
  name: string
  email: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const publicRoutes = ["/login", "/signup"]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()
  const isRedirecting = useRef(false)

  useEffect(() => {
    // Check for stored user on mount - only on client
    try {
      const storedUser = localStorage.getItem("careerlens_user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch {
      // localStorage not available
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (isLoading || isRedirecting.current) return
    
    const isPublicRoute = publicRoutes.includes(pathname)
    if (!user && !isPublicRoute) {
      isRedirecting.current = true
      router.replace("/login")
      // Reset after navigation
      setTimeout(() => { isRedirecting.current = false }, 100)
    } else if (user && isPublicRoute) {
      isRedirecting.current = true
      router.replace("/")
      setTimeout(() => { isRedirecting.current = false }, 100)
    }
  }, [user, isLoading, pathname, router])

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Mock validation - in production, this would be a real API call
    if (password.length < 6) {
      throw new Error("Invalid credentials")
    }

    const newUser = {
      name: email.split("@")[0].replace(/\./g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
    }
    setUser(newUser)
    try {
      localStorage.setItem("careerlens_user", JSON.stringify(newUser))
    } catch {
      // localStorage not available
    }
    router.replace("/")
  }

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Mock validation
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters")
    }

    const newUser = { name, email }
    setUser(newUser)
    try {
      localStorage.setItem("careerlens_user", JSON.stringify(newUser))
    } catch {
      // localStorage not available
    }
    router.replace("/")
  }

  const logout = useCallback(() => {
    setUser(null)
    try {
      localStorage.removeItem("careerlens_user")
    } catch {
      // localStorage not available
    }
    router.replace("/login")
  }, [router])

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
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
