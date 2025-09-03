import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Clock, Utensils, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for occasional food lovers",
      price: "Free",
      period: "",
      badge: null,
      icon: <Utensils className="size-6 text-primary" />,
      features: [
        "Browse all restaurants",
        "Standard delivery (45-60 min)",
        "Basic customer support",
        "Order tracking",
        "Payment protection"
      ],
      cta: "Start Ordering",
      popular: false
    },
    {
      name: "Pro",
      description: "Best for regular food delivery enthusiasts",
      price: "$9.99",
      period: "/month",
      badge: "Most Popular",
      icon: <Zap className="size-6 text-primary" />,
      features: [
        "Everything in Basic",
        "Priority delivery (20-30 min)",
        "Free delivery on orders $15+",
        "Exclusive restaurant access",
        "24/7 premium support",
        "Special member discounts",
        "Advanced order scheduling",
        "Loyalty rewards program"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For businesses and large teams",
      price: "Custom",
      period: "",
      badge: "Business Solution",
      icon: <Crown className="size-6 text-primary" />,
      features: [
        "Everything in Pro",
        "Bulk ordering for teams",
        "Corporate billing & invoicing",
        "Dedicated account manager",
        "Custom delivery schedules",
        "Volume discounts",
        "Analytics & reporting",
        "Catering services"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Crown className="size-4 mr-2" />
            Queen Kitchen Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Food Delivery Plan
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            From casual dining to premium experiences, Queen Kitchen has the perfect plan 
            for every food lover. Enjoy faster delivery, exclusive restaurants, and amazing rewards.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <div className="mb-4 flex justify-center">
                  {plan.icon}
                </div>
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Pro" && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-card border rounded-lg p-8">
            <Clock className="size-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">
              Need a custom solution for your business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Queen Kitchen offers tailored food delivery solutions for offices, events, and large organizations. 
              Get volume discounts, dedicated support, and flexible catering options.
            </p>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}