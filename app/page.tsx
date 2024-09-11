import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white">
        <Link href="/" className="text-2xl font-bold">
        gocingo
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-sm">About Us</Link>
          <Link href="#" className="text-sm">Projects</Link>
          <Link href="#" className="text-sm">Contact Us</Link>
        </nav>
        <Button variant="outline" className="hidden md:inline-flex">Donate Now</Button>
      </header>
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12 text-center">
        </section>
      </main> 
      <footer className="bg-gray-100 py-4 text-center text-sm">
        <p>&copy; 2024Gocingo NGO. All rights reserved.</p>
      </footer>
    </div>
  )
}