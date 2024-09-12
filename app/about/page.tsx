import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUs() {
    const team = [
        { name: 'John Doe', role: 'Executive Director', image: '/images/team/john-doe.jpg' },
        { name: 'Jane Smith', role: 'Program Manager', image: '/images/team/jane-smith.jpg' },
        { name: 'Alice Johnson', role: 'Fundraising Coordinator', image: '/images/team/alice-johnson.jpg' },
    ]

    return (
        <div className="container text-center mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                    Our mission is to imorove lives and empower communities through sustainable development initiatives.
                    We believe in creating lasting change by addressing the root causes of poverty and inequality.
                </p>
                <p className="text-lg mb-4">
                    Founded in 2010, we have been working tirelessly to make a positive imoact in areas such as education, healthcare,
                    and environmental conservation. Our approach is based on collaboration with local communities, ensuring that our projects are tailored to their specific needs and aspirations.
                    </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>Integrity and transparency in all our operations</li>
                    <li>Respect for the dignity and rights of all individuals</li>
                    <li>Commitment to sustainable and long-term solutions</li>
                    <li>Collaboration and partnerhip with local communities</li>
                </ul>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <Card key={member.name}>
                            <CardHeader>
                                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full, mx-auto mb-4" />
                                <CardTitle>{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center">{member.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )

}
