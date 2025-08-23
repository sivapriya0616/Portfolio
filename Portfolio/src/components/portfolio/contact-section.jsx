import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ExternalLink
} from "lucide-react"

export const ContactSection = ({ contactInfo }) => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: contactInfo.location,
      href: contactInfo.location ? `https://maps.google.com/?q=${encodeURIComponent(contactInfo.location)}` : undefined,
      color: "text-red-500"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: contactInfo.github,
      color: "hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: contactInfo.linkedin,
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: contactInfo.twitter,
      color: "hover:text-blue-400"
    },
    {
      icon: ExternalLink,
      label: "Website",
      href: contactInfo.website,
      color: "hover:text-primary"
    }
  ].filter(link => link.href)

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="secondary" className="px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-accent/10">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Get in touch through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  if (!method.value) return null

                  return (
                    <div key={method.label} className="flex items-center space-x-4 group">
                      <div className={`p-3 rounded-lg bg-accent/20 ${method.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{method.label}</p>
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={method.label === "Location" ? "_blank" : undefined}
                            rel={method.label === "Location" ? "noopener noreferrer" : undefined}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{method.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links & Quick Actions */}
            <Card className="border-border/50 bg-gradient-to-br from-card to-accent/10">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Connect With Me
                </CardTitle>
                <CardDescription>
                  Find me on social media and other platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Social Links */}
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="lg"
                        asChild
                        className={`justify-start border-border/50 hover:border-primary/30 ${social.color} transition-all hover:scale-105`}
                      >
                        <a 
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Icon className="w-5 h-5" />
                          <span>{social.label}</span>
                        </a>
                      </Button>
                    )
                  })}
                </div>

                {/* Quick Email Button */}
                {contactInfo.email && (
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      size="lg" 
                      asChild
                      className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 hover:scale-105 transition-all shadow-[var(--shadow-glow)]"
                    >
                      <a href={`mailto:${contactInfo.email}`}>
                        <Mail className="w-5 h-5" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
