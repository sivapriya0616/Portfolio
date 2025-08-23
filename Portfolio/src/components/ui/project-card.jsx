import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const ProjectCard = React.forwardRef(
  ({ title, description, technologies, liveUrl, githubUrl, imageUrl, className }, ref) => {
    return (
      <Card 
        ref={ref} 
        className={cn(
          "group overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1",
          "bg-gradient-to-br from-card via-card to-accent/20",
          "border-border/50 hover:border-primary/30",
          className
        )}
      >
        {imageUrl && (
          <div className="relative overflow-hidden aspect-video">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        )}
        
        <CardHeader>
          <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="text-xs bg-accent/50 text-accent-foreground border-accent/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2">
            {githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="flex-1 border-primary/20 hover:bg-primary/10 hover:border-primary/40"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button 
                size="sm" 
                asChild
                className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }
)
ProjectCard.displayName = "ProjectCard"

export { ProjectCard }
