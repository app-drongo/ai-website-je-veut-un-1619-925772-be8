// Features Component
// Generated: 2025-09-02T16:02:05.646Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Shield, 
  Smartphone, 
  MapPin, 
  Star, 
  ChefHat,
  CreditCard,
  Headphones,
  Leaf
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your favorite meals delivered in 30 minutes or less with our optimized delivery network.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Food Safety Guaranteed",
      description: "Strict hygiene standards and temperature-controlled delivery ensure your food arrives fresh and safe.",
      badge: "Safety"
    },
    {
      icon: Smartphone,
      title: "Easy Mobile Ordering",
      description: "Intuitive app design makes ordering your favorite meals quick and effortless on any device.",
      badge: "Convenience"
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your order from kitchen to doorstep with live GPS updates and delivery notifications.",
      badge: "Tracking"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Curated selection of top-rated restaurants and verified reviews from food lovers like you.",
      badge: "Quality"
    },
    {
      icon: ChefHat,
      title: "Expert Chefs",
      description: "Partner with renowned local chefs and restaurants known for their culinary excellence.",
      badge: "Culinary"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-level security and instant transaction processing.",
      badge: "Payment"
    },
    {
      icon: Headphones,
      title: "24/7 Customer Care",
      description: "Dedicated support team available around the clock to ensure your dining experience is perfect.",
      badge: "Support"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Packaging",
      description: "Sustainable packaging materials that keep your food fresh while protecting the environment.",
      badge: "Sustainability"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Queen Kitchen
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Perfect Food Delivery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From farm-fresh ingredients to your table, we've perfected every step of the food delivery 
            experience for discerning urban professionals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to taste the Queen Kitchen difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Restaurants
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}