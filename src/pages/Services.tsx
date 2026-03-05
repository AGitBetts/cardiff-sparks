import { motion } from "framer-motion";
import { Zap, Home, Lightbulb, Car, Search, FileCheck, ShieldCheck, Plug, Sun, Bath } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: ShieldCheck,
    title: "Consumer Unit Upgrades",
    description: "Replace your old fuse board with a modern, safe consumer unit. All installations come with Part P building control notification and certification.",
  },
  {
    icon: Home,
    title: "Full & Partial Rewires",
    description: "Complete house rewires for older properties or partial rewires for extensions and renovations. Minimal disruption with a high-quality finish.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design & Installation",
    description: "From LED downlights to feature lighting, we design and install lighting solutions that transform your space. Indoor and outdoor options available.",
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description: "OZEV-approved EV charger installations for your home. We supply and fit all leading brands including Zappi, Pod Point and Wallbox.",
  },
  {
    icon: Search,
    title: "Fault Finding & Repairs",
    description: "Tripping circuits, flickering lights, dead sockets? We use professional testing equipment to diagnose and fix electrical faults quickly.",
  },
  {
    icon: FileCheck,
    title: "EICR Testing & Certificates",
    description: "Electrical Installation Condition Reports for landlords, homeowners and estate agents. Required for rental properties every 5 years.",
  },
  {
    icon: Plug,
    title: "Additional Sockets & Circuits",
    description: "Need more power points? We install additional sockets, USB charging points, dedicated appliance circuits and outdoor power supplies.",
  },
  {
    icon: Sun,
    title: "Outdoor & Garden Electrics",
    description: "Weatherproof sockets, garden lighting, security lights, shed and outbuilding power supplies — all installed to the latest regulations.",
  },
  {
    icon: Bath,
    title: "Bathroom Electrics",
    description: "Specialist bathroom electrical installations including extractor fans, heated towel rails, shaver sockets and zone-compliant lighting.",
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-24 pb-16 section-dark">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl font-bold text-section-dark-foreground mb-4"
        >
          Our <span className="text-primary">Services</span>
        </motion.h1>
        <p className="text-section-dark-foreground/60 max-w-xl">
          Professional electrical services for homes and businesses across South Wales & the South West.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <service.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Don't see what you need? Get in touch — we cover most domestic electrical work.</p>
          <Link to="/contact">
            <Button size="lg" className="font-heading font-semibold gap-2">
              <Zap className="h-5 w-5" /> Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
