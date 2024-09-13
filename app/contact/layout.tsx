import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Gocingo to learn more about our projects and how you can support our work.",
}

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>{children}</>
    )
}