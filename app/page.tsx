import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Homepage() {
  return (
    <>
        <section className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Great futures are built with a small charity
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Fundraising for the causes you care about has never been easier. Start your campaign in minutes.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Start Fundraising</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Card className="p-6 bg-green-500 text-white">
            <h3  className="text-2xl font-bold">83%</h3>
            <p className="text-sm">Success rate for campaigns</p>
          </Card>
          <Card className="p-6">
            <h3  className="text-lg font-semibold mb-2">Charity</h3>
            <p className="text-sm">Do you run a charity? Partner with us</p>
          </Card>
          <Card className="p-6">
            <h3  className="text-lg font-semibold mb-2">Fundraise</h3>
            <p className="text-sm">Start your fundraising campaign</p>
          </Card>
          <Card className="p-6">
            <h3  className="text-lg font-semibold mb-2">Donate</h3>
            <p className="text-sm">Support a cause you care about</p>
          </Card>
          <Card className="p-6 bg-green-100">
            <h3  className="text-lg font-semibold mb-2">New feature</h3>
            <p className="text-sm">Check out our latest updates</p>
          </Card>
        </section>
        <section className="bg-green-400 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Fundraisinng on Gocingo takes just some few minutes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2"> Step {i}</h3>
                  <p className="text-sm">Description of step {i}</p>
                </div>
              ))}
            </div>
          </div>
          </section>
    </>
  )
}