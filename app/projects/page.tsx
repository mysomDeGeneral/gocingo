'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "@/data/projects"


export default function Projects()  {
    const [projects, setProjects] = useState<Project[]>([]) 
    const [limit] = useState(6);

    useEffect(() => {
      async function fetchProjects() {
        const response = await fetch(`/mockApi/projects?limit=${limit}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Project[] = await response.json();
        setProjects(data);
      }
      fetchProjects();
    }, []);

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