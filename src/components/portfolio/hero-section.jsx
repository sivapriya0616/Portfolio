// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { ChevronDown, Download, Mail } from "lucide-react"
// import Spline from "@splinetool/react-spline";


// export const HeroSection = ({ 
//   name, 
//   title, 
//   description, 
//   skills, 
//   resumeUrl, 
//   onContactClick 
// }) => {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-primary/5" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary-glow))_0%,transparent_50%)] opacity-20" />
      
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           {/* Name and Title */}
//           <div className="space-y-4">
//             <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
//               {name}
//             </h1>
//             <h2 className="text-2xl md:text-3xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-1000 delay-150">
//               {title}
//             </h2>
//           </div>

//           {/* Description */}
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300">
//             {description}
//           </p>

//           {/* Skills */}
//           <div className="flex flex-wrap justify-center gap-3 animate-in slide-in-from-bottom-4 duration-1000 delay-450">
//             {skills.map((skill) => (
//               <Badge 
//                 key={skill}
//                 variant="secondary"
//                 className="px-4 py-2 text-sm bg-gradient-to-r from-accent/80 to-primary/20 border-primary/20 text-accent-foreground hover:scale-105 transition-transform"
//               >
//                 {skill}
//               </Badge>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-4 duration-1000 delay-600">
//             <Button 
//               onClick={onContactClick}
//               size="lg"
//               className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 hover:scale-105 transition-all shadow-[var(--shadow-glow)]"
//             >
//               <Mail className="w-5 h-5" />
//               Get In Touch
//             </Button>
            
//             {resumeUrl && (
//               <Button 
//                 variant="outline" 
//                 size="lg"
//                 asChild
//                 className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
//               >
//                 <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
//                   <Download className="w-5 h-5" />
//                   Download Resume
//                 </a>
//               </Button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-6 h-6 text-muted-foreground" />
//       </div>
//     </section>
//   )
// }
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, Mail } from "lucide-react";
import Spline from "@splinetool/react-spline";


export const HeroSection = ({ 
  name, 
  title, 
  description, 
  skills, 
  resumeUrl, 
  onContactClick 
}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* 3D Spline Background */ }
      <div className="absolute inset-0 right-0 flex justify-end pointer-events-none z-0">
        <div className="w-full h-full flex items-start justify-end mt-16">
          <Spline 
            scene="https://prod.spline.design/c6pCr-vMTkYg6aYQ/scene.splinecode" 
            style={{ width: "100%", height: "100%" }} 
          />
        </div>
      </div> 

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary-glow))_0%,transparent_50%)] opacity-20" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-primary-glow bg-clip-text text-transparent animate-in slide-in-from-bottom-4 duration-1000">
            {name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground animate-in slide-in-from-bottom-4 duration-1000 delay-150">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 animate-in slide-in-from-bottom-4 duration-1000 delay-450">
          {skills.map((skill) => (
            <Badge 
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm bg-gradient-to-r from-accent/80 to-primary/20 border-primary/20 text-accent-foreground hover:scale-105 transition-transform"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-4 duration-1000 delay-600">
          <Button 
            onClick={onContactClick}
            size="lg"
            className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 hover:scale-105 transition-all shadow-[var(--shadow-glow)]"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>

          {resumeUrl && (
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="px-8 py-6 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer" download="Sivapriya_S_Resume.pdf">
              <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};
