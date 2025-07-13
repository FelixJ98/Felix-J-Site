import { useState } from "react";
import { Download, Calendar, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - replace with actual API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    // Replace with actual resume URL
    window.open("#", "_blank");
  };

  const handleCalendlyOpen = () => {
    // Replace with actual Calendly URL
    window.open("https://calendly.com/your-username", "_blank");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next XR project or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Quick Actions */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleResumeDownload}
                  className="btn-hero w-full group"
                  size="lg"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
                
                <Button 
                  onClick={handleCalendlyOpen}
                  variant="outline"
                  className="btn-hero-secondary w-full group"
                  size="lg"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Schedule Coffee Chat
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="card-tech p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary" />
                Direct Contact
              </h4>
              <p className="text-muted-foreground">
                Prefer email? Reach out directly at:
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="text-primary hover:text-primary-glow transition-colors font-medium"
              >
                your.email@example.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-tech p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-muted border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-muted border-border focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-muted border-border focus:border-primary resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-hero w-full group"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;