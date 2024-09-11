import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Gocingo</h3>
            <p className="text-sm">Making a difference in the world</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Industrial street, Accra, Ghana</p>
            <p className="text-sm">Email: info@gocingo.org</p>
            <p className="text-sm">Phone: +233 545148108</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-gray-700 text-white" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-sm">&copy; 2024 Gocingo NGO. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}