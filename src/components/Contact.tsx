import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDownloadButton } from "@/components/ResumeDownloadButton";
import { ContactModal } from "@/components/ContactModal";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-sm text-primary mb-6">
            <span className="text-muted-foreground">$</span> contact --info
          </div>

          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out!
              </p> */}

              <div className="space-y-4">
                <a
                  href="mailto:somenjeet2004@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift group"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      somenjeet2004@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919546764006"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all hover-lift group"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      +91 9546764006
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                    <div className="font-medium">Kolkata, India</div>
                  </div>
                </div>

                {/* Contact Modal Trigger */}
                <div className="p-6 rounded-lg bg-card border border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed pb-2">
                    Open to collaborations and new opportunities. Let’s connect!
                  </p>

                  <ContactModal
                    triggerClassName="w-full"
                    trigger={
                      <Button className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Open Contact Form
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="text-lg font-semibold mb-4">
                  Connect on Social
                </h3>

                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-border hover:border-primary hover:bg-transparent"
                  >
                    <a
                      href="https://github.com/somenjeet01"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5 mr-3" />
                      GitHub — @somenjeet01
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-start border-border hover:border-primary hover:bg-transparent"
                  >
                    <a
                      href="https://linkedin.com/in/somen-jeet-562044259/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5 mr-3" />
                      LinkedIn Profile
                    </a>
                  </Button>

                  <ResumeDownloadButton
                    variant="outline"
                    className="w-full justify-start border-border hover:border-primary hover:bg-transparent"
                  />
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                <div className="font-mono text-sm text-primary mb-2">
                  <span className="text-muted-foreground">$</span> status
                </div>
                <p className="text-foreground font-medium">
                  ✓ Available for freelance projects
                </p>
                <p className="text-foreground font-medium">
                  ✓ Open to full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
