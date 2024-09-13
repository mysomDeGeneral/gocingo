import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects()  {
    const projects = [
        {
            title: 'Clean Water Initiative',
            description: 'Providing access to clean and safe drinking water in rural communities.',
            image: '/images/borehole.jpg',
          },
          {
            title: 'Education for All',
            description: 'Building schools and supporting education programs in underserved areas.',
            image: '/images/school_block.jpg',
          },
          {
            title: 'Sustainable Agriculture',
            description: 'Promoting sustainable farming practices to improve food security and livelihoods.',
            image: '/images/farmland.jpg',
          },
          {
            title: 'Healthcare Outreach',
            description: 'Bringing essential healthcare services to remote and underserved populations.',
            image: '/images/health.jpg',
          },
          {
            title: 'Women Empowerment',
            description: 'Supporting women through skills training and microfinance initiatives.',
            image: '/images/soapmaking.jpg',
          },
          {
            title: 'Environmental Conservation',
            description: 'Protecting local ecosystems and promoting sustainable resource management.',
            image: '/images/solar_panels.jpg',
          },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-bold mb-8">Our Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.title}>
                        <CardHeader>
                            <Image src={project.image} alt={project.title} width={400} height={300} className="rounded-lg mb-4"/>
                            <CardTitle>{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{project.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}