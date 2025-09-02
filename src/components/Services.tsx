// Services Component
// Generated: 2025-09-02T16:02:05.647Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Utensils,
  Clock,
  Truck,
  Star,
  ChefHat,
  MapPin,
  Zap,
  Heart,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "fast-delivery",
      title: "Lightning Fast Delivery",
      description: "Get your favorite meals delivered hot and fresh in under 30 minutes with our express delivery service.",
      icon: Zap,
      badge: "Popular",
      features: ["30-min delivery", "Real-time tracking", "Hot & fresh guarantee"],
      link: "/delivery-zones"
    },
    {
      id: "premium-restaurants",
      title: "Premium Restaurants",
      description: "Access to the finest restaurants and cuisines in your area, from local favorites to gourmet dining.",
      icon: ChefHat,
      features: ["Curated selection", "Quality assured", "Exclusive partnerships"],
      link: "/restaurants"
    },
    {
      id: "24-7-service",
      title: "24/7 Food Service",
      description: "Satisfy your cravings anytime with our round-the-clock food delivery service across the city.",
      icon: Clock,
      badge: "New",
      features: ["Always available", "Night menu", "Weekend specials"],
      link: "/late-night-delivery"
    },
    {
      id: "local-cuisine",
      title: "Local Specialties",
      description: "Discover authentic local dishes and traditional recipes from neighborhood gems and family restaurants.",
      icon: Utensils,
      features: ["Authentic flavors", "Local favorites", "Traditional recipes"],
      link: "/local-cuisine"
    },
    {
      id: "group-orders",
      title: "Group & Office Orders",
      description: "Perfect for team lunches, office meetings, and family gatherings with bulk ordering and scheduling.",
      icon: Heart,
      features: ["Bulk discounts", "Scheduled delivery", "Corporate accounts"],
      link: "/group-orders"
    },
    {
      id: "city-wide",
      title: "City-Wide Coverage",
      description: "Extensive delivery network covering all major areas with reliable service and consistent quality.",
      icon: MapPin,
      features: ["Wide coverage", "Multiple zones", "Reliable service"],
      link: "/delivery-areas"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Food Delivery That
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Exceeds Expectations
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the best food delivery service with Queen Kitchen - where quality meets convenience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Explore Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Explore Options</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to satisfy your cravings?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Order Now
            </Button>
            <Button size="lg" variant="outline">
              Browse Restaurants
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}