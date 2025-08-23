import { useRef } from "react"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import project1Image from "../assets/e-commerce.png"; // Add this import
import project2Image from "../assets/invoice-Generator.png"; // Add this import
import project3Image from "../assets/LMS.png"; // Add this import
import project4Image from "../assets/Authentication-Page.png"; // Add this import
import project5Image from "../assets/QR-Generator.png"; // Add this import



const Index = () => {
  const contactRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Sample data - replace with your actual information
  const portfolioData = {
    name: "Sivapriya.S",
    title: "Full Stack Developer",
    description: "I'm a passionate developer who loves creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.",
    skills: ["Java","C++","Python", "MySQL","React", "JavaScript", "Node.js", "MongoDB", "Git"],
    resumeUrl: "#", // Add your resume URL here
    
    projects: [
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "Built end-to-end e-commerce features including product browsing, cart management, and checkout withsecure Passport.js/JWT authentication..",
        technologies: ["React", "JavaScript", "Node.js", "MongoDB","Express"],
        // liveUrl: "#",
        githubUrl: "https://github.com/sivapriya0616/E-Commerce.git",
        imageUrl: project1Image,
        featured: true
      },
      {
        id: "2", 
        title: "Invoice-Generator",
        description: "Created an invoice creation tool with secure login, live preview, PDF export (jsPDF/html2canvas), and emailintegration",
        technologies: ["React", "JavaScript", "Spring Boot", "MongoDB","Cloudinary"],
        // liveUrl: "#",
        githubUrl: "https://github.com/sivapriya0616/InvoiceGenerator.git",
        imageUrl: project2Image,
        featured: true
      },
      {
        id: "3",
        title: "Subscribtion Based Learning Platform (On going)",
        description: "Built a subscription-based e-learning platform with secure login, payments, and cloud storage.Students can access courses, track progress, and receive automated certificates.Instructors manage content, quizzes, and monitor student performance via dashboards.”,,,",
        technologies: ["React", "JavaScript", "Node.js", "SupaBase","Express","DigitalOcean"],
        // liveUrl: "#",
        githubUrl: "https://github.com/SubscriptionBasedOnlineLearningPlatfrom/Online-Course-Platform.git",
        imageUrl:project3Image,
      },
      {
        id: "4",
        title: "Authentication Page",
        description: "Developed a full-stack authentication app with React, Node/Express, and MySQL, featuring secure registration/login with bcrypt and session management.Implemented protected routes, error handling, and logout with CORS configured for smooth local development.",
        technologies: ["React", "JavaScript", "CSS", "MySQl","Express","Node.js"],
        // liveUrl: "#",
        githubUrl: "https://github.com/sivapriya0616/Full-Stack.git",
        imageUrl: project4Image,
      },
      {
        id: "5",
        title: "QR-Generator",
        description: "“Built a lightweight React app that generates QR codes instantly from text or URLs with a clean, responsive UI.Features real-time QR previews, client-side rendering, and accessible design for smooth use on desktop",
        technologies: ["React", "JavaScript", "CSS"],
        // liveUrl: "#",
        githubUrl: "https://github.com/sivapriya0616/Qrcode-generator.git",
        imageUrl: project5Image,
      }
    ],
    
    contactInfo: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567", 
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      website: "https://johndoe.dev"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        name={portfolioData.name}
        title={portfolioData.title}
        description={portfolioData.description}
        skills={portfolioData.skills}
        resumeUrl={portfolioData.resumeUrl}
        onContactClick={scrollToContact}
      />
      
      <ProjectsSection projects={portfolioData.projects} />
      
      <div ref={contactRef}>
        <ContactSection contactInfo={portfolioData.contactInfo} />
      </div>
    </div>
  );
};

export default Index;
