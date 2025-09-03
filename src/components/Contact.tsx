"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones,
  ChefHat,
  Truck,
  Star
} from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurant: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactTiers = [
    {
      icon: Users,
      title: "Basic Support",
      description: "Perfect for individual customers",
      contact: "support@queenkitchen.com",
      action: "Contact Basic Support",
      features: ["Order assistance", "Menu inquiries", "Basic delivery support"],
      badge: "Free"
    },
    {
      icon: ChefHat,
      title: "Pro Partnership",
      description: "For restaurant partners",
      contact: "partners@queenkitchen.com",
      action: "Join as Partner",
      features: ["Restaurant onboarding", "Menu management", "Analytics dashboard"],
      badge: "Partner"
    },
    {
      icon: Truck,
      title: "Enterprise Solutions",
      description: "Large-scale food delivery",
      contact: "enterprise@queenkitchen.com",
      action: "Request Enterprise Demo",
      features: ["Custom integration", "Dedicated account manager", "Priority support"],
      badge: "Enterprise"
    }
  ]

  const deliveryZones = [
    {
      city: "Downtown Core",
      address: "Financial District, CBD Area",
      deliveryTime: "15-25 mins"
    },
    {
      city: "Midtown",
      address: "Business District, Shopping Centers",
      deliveryTime: "20-30 mins"
    },
    {
      city: "Uptown",
      address: "Residential Areas, Universities",
      deliveryTime: "25-35 mins"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <ChefHat className="size-4 mr-2" />
            Contact Queen Kitchen
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Queen Kitchen
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you're a hungry customer, restaurant partner, or enterprise client, 
            we're here to serve you with the best food delivery experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Send className="size-6 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Have questions about orders, partnerships, or our services? We'll respond within 2 hours during business hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium mb-2">
                    Restaurant/Business Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your restaurant or business name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your inquiry, order issue, or partnership interest..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Message to Queen Kitchen
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Tiers */}
          <div className="space-y-8">
            {/* Support Tiers */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Choose Your Support Level
              </h3>
              <div className="space-y-4">
                {contactTiers.map((tier, index) => {
                  const Icon = tier.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{tier.title}</h4>
                              <Badge variant="secondary" className="text-xs">{tier.badge}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{tier.description}</p>
                            <ul className="text-xs text-muted-foreground space-y-1 mb-3">
                              {tier.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-1">
                                  <Star className="size-3 text-primary" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                            <p className="font-medium text-primary text-sm">{tier.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Delivery Zones */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Delivery Zones
              </h3>
              <div className="space-y-3">
                {deliveryZones.map((zone, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{zone.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{zone.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {zone.deliveryTime}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Operating Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Delivery Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Thursday</span>
                    <span>10:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Friday - Saturday</span>
                    <span>10:00 AM - 12:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <MessageSquare className="size-4" />
                    24/7 customer support via live chat for urgent order issues
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}