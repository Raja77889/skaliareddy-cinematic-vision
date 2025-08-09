import aboutImage from "@/assets/about-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="cinematic-section bg-dark-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="section-title text-white mb-6">
                About Me
              </h2>
              <div className="w-24 h-1 bg-luxury-gold mb-8"></div>
            </div>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Creative and passionate graphic designer with a strong eye for visual storytelling, 
                currently pursuing Computer Science Engineering. With over 1 year of hands-on freelancing 
                experience, I bring expertise in Adobe Photoshop, Adobe Premiere Pro, and photography.
              </p>
              
              <p>
                My mission is to transform ideas into visually compelling designs that connect with 
                audiences on an emotional level. I believe in blending creativity, precision, and 
                brand identity to produce impactful results for clients worldwide.
              </p>
              
              <blockquote className="border-l-4 border-luxury-gold pl-6 py-4 bg-black/20 rounded-r-lg">
                <p className="text-luxury-gold italic text-xl font-playfair">
                  "Design is not just what it looks like and feels like. Design is how it works."
                </p>
              </blockquote>
            </div>
            
            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-2xl font-playfair text-luxury-gold mb-4">Education</h3>
                <div className="space-y-3 text-white/70">
                  <div>
                    <p className="font-semibold">Diploma in Computer Science Engineering</p>
                    <p className="text-sm">Holly Institute of Technology, Berhampur (2022 – 2024)</p>
                  </div>
                  <div>
                    <p className="font-semibold">ITI (Fitter)</p>
                    <p className="text-sm">St. Joseph Technical Institute, Chatrapur (2016 – 2018)</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-playfair text-luxury-gold mb-4">Experience</h3>
                <div className="space-y-3 text-white/70">
                  <div>
                    <p className="font-semibold">Freelance Graphic Designer</p>
                    <p className="text-sm">2023 – Present</p>
                  </div>
                  <div>
                    <p className="font-semibold">KIA Motors India Pvt. Ltd.</p>
                    <p className="text-sm">Neem Trainee (2019 – 2022)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={aboutImage} 
                alt="Creative workspace" 
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-luxury-gold text-black p-6 rounded-lg premium-card">
              <div className="text-center">
                <div className="text-3xl font-bold">1+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-white text-black p-6 rounded-lg premium-card">
              <div className="text-center">
                <div className="text-3xl font-bold">40%</div>
                <div className="text-sm">Engagement Boost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;