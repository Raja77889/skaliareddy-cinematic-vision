import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Luxury Brand Identity",
      description: "Comprehensive brand identity design including logos, color palettes, typography, and brand guidelines that establish a premium presence.",
      icon: "🎨",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    },
    {
      title: "Premium Social Media Graphics",
      description: "High-end social media templates, posts, stories, and promotional materials designed to boost engagement and brand recognition.",
      icon: "📱",
      features: ["Instagram Templates", "Story Designs", "Post Graphics", "Highlight Covers"]
    },
    {
      title: "Cinematic Video Editing",
      description: "Professional video editing services with cinematic effects, color grading, and motion graphics for promotional content.",
      icon: "🎬",
      features: ["Video Editing", "Color Grading", "Motion Graphics", "Audio Sync"]
    },
    {
      title: "Print & Digital Design",
      description: "Elegant print materials and digital assets including brochures, business cards, posters, and web graphics.",
      icon: "🖨️",
      features: ["Brochure Design", "Business Cards", "Posters", "Web Graphics"]
    },
    {
      title: "Photography & Retouching",
      description: "Professional photography services and advanced photo retouching to create stunning visuals for your brand.",
      icon: "📸",
      features: ["Product Photography", "Portrait Photography", "Photo Retouching", "Color Correction"]
    },
    {
      title: "Creative Consultation",
      description: "Strategic creative consultation to help define your brand vision, messaging, and visual direction for maximum impact.",
      icon: "💡",
      features: ["Brand Strategy", "Creative Direction", "Visual Consultation", "Market Research"]
    }
  ];

  return (
    <section id="services" className="cinematic-section bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white mb-6">
            Premium Services
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive creative solutions designed to elevate your brand and connect with your audience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="premium-card bg-dark-charcoal p-8 rounded-lg animate-fade-in hover-scale group">
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-playfair text-white mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-white/60">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Button className="luxury-button-outline w-full group-hover:luxury-button transition-all duration-300">
                Learn More
              </Button>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-dark-charcoal p-12 rounded-lg border border-luxury-gold/20">
            <h3 className="text-3xl font-playfair text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with exceptional design that drives results
            </p>
            <Button 
              className="luxury-button text-lg px-8 py-4 h-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;