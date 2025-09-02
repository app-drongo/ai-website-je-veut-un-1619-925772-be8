// Footer Component
// Generated: 2025-09-02T16:02:05.643Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  ChefHat,
  Clock,
  Truck
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Food Categories",
      links: [
        { name: "Pizza", href: "/restaurants?category=pizza" },
        { name: "Burgers", href: "/restaurants?category=burgers" },
        { name: "Asian Cuisine", href: "/restaurants?category=asian" },
        { name: "Italian", href: "/restaurants?category=italian" },
        { name: "Healthy", href: "/restaurants?category=healthy" },
        { name: "Desserts", href: "/restaurants?category=desserts" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Queen Kitchen", href: "/about" },
        { name: "Partner Restaurants", href: "/partners" },
        { name: "Become a Partner", href: "/partner-signup" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Contact Us", href: "/contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Order Tracking", href: "/track-order" },
        { name: "Delivery Info", href: "/delivery" },
        { name: "Payment Methods", href: "/payment" },
        { name: "Refunds", href: "/refunds" },
        { name: "Customer Service", href: "/support" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "Food Safety", href: "/food-safety" },
        { name: "Allergen Info", href: "/allergens" },
        { name: "Accessibility", href: "/accessibility" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/queenkitchen" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/queenkitchen" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/queenkitchen" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/queenkitchen" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <ChefHat className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-primary">Queen Kitchen</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Your favorite meals delivered fresh and fast. Discover amazing restaurants 
                and cuisines in your area. Order now and taste the difference!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@queenkitchen.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) FOOD-123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">24/7 Delivery Service</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Food Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get exclusive deals and new restaurant alerts. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Queen Kitchen. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Made with <Heart className="size-3 text-primary fill-current" /> for food lovers
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/sitemap" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/delivery-areas" className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
              <Truck className="size-3" />
              Delivery Areas
            </Link>
            <Link href="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Settings
            </Link>
            <Link href="/support" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              24/7 Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}