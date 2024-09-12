'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"


export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const { toast } = useToast()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted', formData)
        toast({ 
            title: 'Message sent',
            description: "Thank you for contacting us. We'll get back to you soon!",
    })
    setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-bold mb-8">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <Input 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <Input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <Textarea 
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <p className="mb-2">If you have any questions, please feel free to contact us.</p>
                    <p className="mb-2"><strong>Email:</strong> info@gicingo.org</p>
                    <p className="mb-2"><strong>Phone:</strong> +233 54 514 8108</p>
                    <p className="mb-2"><strong>Working Hours:</strong>Monday to Friday, 8:00am - 5:00pm</p>
                    <p className="mb-4"><strong>Address:</strong> Industrial street, Accra, Ghana</p>

                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <p>Find us on socila media to stay updated with our latest projects.</p>
                </div>
            </div>
        </div>
    )
}