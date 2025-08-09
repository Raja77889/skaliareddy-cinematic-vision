import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="cinematic-section bg-dark-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-luxury-gold rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="section-title text-white mb-6">
              Let's Create Something Amazing
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-fade-in">
              <h3 className="text-3xl font-playfair text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-white/70">kaliareddy77889@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Phone</h4>
                      <p className="text-white/70">+91 9090021314</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-black text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Location</h4>
                      <p className="text-white/70">Satichuara, Cuttack, Odisha, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Availability */}
                <div className="bg-black/30 p-6 rounded-lg">
                  <h4 className="text-luxury-gold font-semibold mb-3">Current Availability</h4>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white">Available for new projects</span>
                  </div>
                  <p className="text-white/60 text-sm">Typically responds within 24 hours</p>
                </div>
                
                {/* Social Links */}
                <div>
                  <h4 className="text-white font-semibold mb-4">Follow My Work</h4>
                  <div className="flex space-x-4">
                    <Button className="luxury-button-outline w-12 h-12 p-0">
                      <span className="text-lg">📘</span>
                    </Button>
                    <Button className="luxury-button-outline w-12 h-12 p-0">
                      <span className="text-lg">📷</span>
                    </Button>
                    <Button className="luxury-button-outline w-12 h-12 p-0">
                      <span className="text-lg">💼</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="premium-card bg-black p-8 rounded-lg">
                <h3 className="text-2xl font-playfair text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-dark-charcoal border-white/20 text-white placeholder:text-white/40 focus:border-luxury-gold"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-dark-charcoal border-white/20 text-white placeholder:text-white/40 focus:border-luxury-gold"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-dark-charcoal border-white/20 text-white placeholder:text-white/40 focus:border-luxury-gold"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-white/80 text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-dark-charcoal border-white/20 text-white placeholder:text-white/40 focus:border-luxury-gold min-h-32"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="luxury-button w-full text-lg py-3 h-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;