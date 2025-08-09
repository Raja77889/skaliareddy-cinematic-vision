import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectImage from "@/assets/project-fitness.jpg";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Branding", "Social Media", "Video Editing", "Print Design"];
  
  const projects = [
    {
      id: 1,
      title: "Fitness Coach Branding",
      category: "Social Media",
      description: "Complete suite of branded Instagram templates and highlight covers for a U.S.-Based Fitness Coach",
      image: projectImage,
      tags: ["Adobe Photoshop", "Canva", "Branding"],
      client: "California, USA",
      result: "40% engagement boost in 3 weeks"
    },
    {
      id: 2,
      title: "Luxury Brand Identity",
      category: "Branding",
      description: "Premium brand identity design with sophisticated typography and elegant color palette",
      image: projectImage,
      tags: ["Brand Identity", "Logo Design", "Typography"],
      client: "Premium Fashion Brand",
      result: "Brand recognition increased by 60%"
    },
    {
      id: 3,
      title: "Cinematic Promotional Video",
      category: "Video Editing",
      description: "High-end promotional video with cinematic effects and professional editing",
      image: projectImage,
      tags: ["Adobe Premiere Pro", "Motion Graphics", "Color Grading"],
      client: "Tech Startup",
      result: "1M+ views across platforms"
    },
    {
      id: 4,
      title: "Print Campaign Design",
      category: "Print Design",
      description: "Elegant print materials including brochures, business cards, and posters",
      image: projectImage,
      tags: ["Print Design", "Layout", "Adobe InDesign"],
      client: "Real Estate Company",
      result: "25% increase in lead generation"
    }
  ];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="cinematic-section bg-dark-charcoal relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white mb-6">
            Featured Portfolio
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Showcasing premium design work that delivers exceptional results for clients worldwide
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter 
                    ? "luxury-button" 
                    : "luxury-button-outline"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="premium-card bg-black rounded-lg overflow-hidden animate-fade-in hover-scale">
              {/* Project Image */}
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-luxury-gold text-black text-sm rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-playfair text-white">{project.title}</h3>
                  <span className="text-luxury-gold text-sm font-medium">{project.category}</span>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <span className="text-luxury-gold font-medium">Client:</span>
                    <p className="text-white/80">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-luxury-gold font-medium">Result:</span>
                    <p className="text-white/80">{project.result}</p>
                  </div>
                </div>
                
                <Button className="luxury-button w-full">
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;