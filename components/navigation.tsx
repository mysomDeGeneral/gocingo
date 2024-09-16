'use client'
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "./mode-toggle"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  }

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen)

  const navItems = [
    { name: "Home", href:"/"},
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 relative z-50">
      <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        gocingo
      </Link>
      
      
      <nav className="hidden md:flex space-x-4 mr-4">
        {navItems.map((item) => (
          <Link key={item.name} href={item.href} className="text-sm text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <Link href="/contact">
      <Button variant="outline" className="hidden md:inline-flex hover:bg-green-500 hover:text-white text-gray-600 dark:text-gray-300 dark:hover:bg-green-600 transition-colors">
        Donate Now
      </Button>
      </Link>
      <div className="hidden md:block ml-4">
              <ModeToggle />
      </div>
      <button onClick={toggleMenu} className="md:hidden text-gray-600 dark:text-gray-300" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-800 z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" className="hover:bg-green-500 hover:text-gray-600 dark:text-gray-300 dark:hover:bg-green-600 transition-colors" onClick={toggleMenu}>
                Donate Now
              </Button>
              <ModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}