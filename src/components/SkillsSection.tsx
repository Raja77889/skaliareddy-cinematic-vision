const SkillsSection = () => {
  const skills = [
    { name: "Adobe Photoshop", level: 95, icon: "🎨" },
    { name: "Adobe Premiere Pro", level: 90, icon: "🎬" },
    { name: "Branding & Identity", level: 88, icon: "🏷️" },
    { name: "Typography", level: 92, icon: "📝" },
    { name: "Digital Design", level: 94, icon: "💻" },
    { name: "Photography", level: 85, icon: "📸" }
  ];

  return (
    <section id="skills" className="cinematic-section bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Mastering the art of visual communication through cutting-edge tools and creative expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="premium-card bg-dark-charcoal p-8 rounded-lg animate-fade-in hover-scale">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-playfair text-white mb-2">{skill.name}</h3>
              </div>
              
              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-luxury-gold font-semibold">{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;