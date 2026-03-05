import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="section-dark border-t border-primary/20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-6 w-6 text-primary" />
            <span className="font-heading text-lg font-bold text-section-dark-foreground">
              Sparks<span className="text-primary">Electrical</span>
            </span>
          </div>
          <p className="text-section-dark-foreground/70 text-sm leading-relaxed">
            Your trusted, Part P certified electrician serving Cardiff, South Wales & the South West. Domestic & commercial electrical services.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-section-dark-foreground mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reviews", label: "Reviews" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-section-dark-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-section-dark-foreground mb-4">Get In Touch</h4>
          <div className="flex flex-col gap-3 text-sm text-section-dark-foreground/70">
            <a href="tel:07700900000" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary" /> 07700 900 000
            </a>
            <a href="mailto:info@sparkselectrical.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary" /> info@sparkselectrical.co.uk
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Cardiff, South Wales
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary/10 text-center text-xs text-section-dark-foreground/50">
        © {new Date().getFullYear()} Sparks Electrical. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
