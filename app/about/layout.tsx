import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Gocingo's missions, values the team behind the organization.",
}

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}