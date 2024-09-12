'use client'
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Homepage() {
  const [projectCount, setProjectCount] = useState(10)
  const [donationCount, setDonationCount] = useState(1000)

  const incrementCounts = () => {
    setProjectCount(prev => prev + 1)
    setDonationCount(prev => prev + 100)
  }

  const projects = [
    {
        title: 'Clean Water Initiative',
        description: 'Providing access to clean and safe drinking water in rural communities.',
        image: '/placeholder.svg',
      },
      {
        title: 'Education for All',
        description: 'Building schools and supporting education programs in underserved areas.',
        image: '/placeholder.svg',
      },
      {
        title: 'Sustainable Agriculture',
        description: 'Promoting sustainable farming practices to improve food security and livelihoods.',
        image: '/placeholder.svg',
      },
    ]

  return (
    <>
        <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Great futures are built with a small charity
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          We're dedicated to making a positive impact on the world through sustainable development and community empowerment.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="hover:bg-gray-700 hover:text-green-500">
               <Link href="/contact">Donate Now</Link> 
            </Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/gocingo_hero_image.jpg" alt="Gocingo Hero Image" width={600} height={400} className="rounded-lg" />
          </div>
          
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.title}>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                        <Image src={project.image} alt={project.title} width={300} height={200} className="rounded-lg mb-4"/>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card className="p-6 bg-green-500 text-white">
            <h3  className="text-2xl font-bold">83%</h3>
            <p className="text-sm">Success rate for campaigns</p>
          </Card>
          <Link href="/contact">
          <Card className="p-6 hover:bg-green-200">
            <h3  className="text-lg font-semibold mb-2">Charity</h3>
            <p className="text-sm">Do you run a charity? Partner with us</p>
          </Card>
          </Link>
          <Link href="/contact">
          <Card className="p-6 hover:bg-green-200">
            <h3  className="text-lg font-semibold mb-2">Fundraise</h3>
            <p className="text-sm">Start your fundraising campaign</p>
          </Card>
          </Link>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
          <div className="flex justify-center space-x-16">
            <div>
              <p className="text-4xl font-bold text-blue-600">{projectCount}</p>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-600">GHC{donationCount}</p>
              <p className="text-xl">Donations Received</p>
            </div>
          </div>
          <Button onClick={incrementCounts} className="mt-8 mb-8">Refresh Impact</Button>
          </section>
    </>
  )
}