import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Projects",
    description: "Explore our projects that were are working on to make difference in the world.",
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}