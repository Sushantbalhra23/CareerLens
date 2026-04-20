"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
} from "react"
import { useRouter, usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
interface User {
  name: string
  email: string
}

interface StoredUser extends User {
  password: string
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
  const { data: session, status } = useSession()

  const router = useRouter()
  const pathname = usePathname()

  const isRedirecting = useRef(false)

  /*
  Load user from localStorage on app start
  */
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("careerlens_user")

      if (storedUser) {
        const parsed: StoredUser = JSON.parse(storedUser)

        setUser({
          name: parsed.name,
          email: parsed.email,
        })
      }
    } catch {
      // ignore storage errors
    }

    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (session?.user) {
      setUser({
        name: session.user.name || "",
        email: session.user.email || "",
      })
    }
  }, [session])

  /*
  Route protection logic
  */
  useEffect(() => {
    if (
      isLoading ||
      status === "loading" ||
      isRedirecting.current
    ) return

    const isPublicRoute = publicRoutes.includes(pathname)

    if (!user && !isPublicRoute) {
      isRedirecting.current = true
      router.replace("/login")

      setTimeout(() => {
        isRedirecting.current = false
      }, 100)
    }

    else if (user && isPublicRoute) {
      isRedirecting.current = true
      router.replace("/")

      setTimeout(() => {
        isRedirecting.current = false
      }, 100)
    }

  }, [user, isLoading, status, pathname, router])

  /*
  LOGIN
  */
  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || "Login failed")
    }

    setUser({
      name: data.name,
      email: data.email,
    })

    router.replace("/")
  }

  /*
  SIGNUP
  */
  const signup = async (
    name: string,
    email: string,
    password: string
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 800))

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters")
    }

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || "Signup failed")
    }

    setUser({
      name: data.name,
      email: data.email,
    })

    router.replace("/")
  }

  /*
  LOGOUT
  */
  const logout = useCallback(async () => {
    setUser(null)

    try {
      localStorage.removeItem("careerlens_user")
      await signOut({ callbackUrl: "/login" })
    } catch {
      // ignore errors
    }

    router.replace("/login")
  }, [router])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/*
HOOK
*/
export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(
      "useAuth must be used within an AuthProvider"
    )
  }

  return context
}