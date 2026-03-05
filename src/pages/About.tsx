import { motion } from "framer-motion";
import { Shield, Award, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImg from "@/assets/about-electrician.jpg";

const qualifications = [
  "NVQ Level 3 in Electrical Installation",
  "City & Guilds 2391 Inspection & Testing",
  "18th Edition Wiring Regulations (BS 7671)",
  "Part P Registered Competent Person",
  "NICEIC Approved Contractor",
  "EV Charger Installation Certified",
  "Full Public Liability Insurance",
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-24 pb-16 section-dark">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl font-bold text-section-dark-foreground mb-4"
        >
          About <span className="text-primary">Us</span>
        </motion.h1>
        <p className="text-section-dark-foreground/60 max-w-xl">Meet the man behind the van — over 15 years of trusted electrical expertise.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <img src={aboutImg} alt="Your local electrician" className="rounded-xl w-full object-cover aspect-square shadow-xl" />
          </div>
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
              Experienced. Qualified. Trusted.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With over 15 years in the trade, I've built my reputation on honest, reliable electrical work across Cardiff, South Wales and the South West. From my first apprenticeship to becoming a fully qualified NICEIC Approved Contractor, I've always believed in doing the job right — first time, every time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I specialise in domestic electrical installations, from consumer unit upgrades and full house rewires to lighting design and EV charger installations. Every job comes with the proper certification and is completed to the latest 18th Edition wiring regulations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a sole trader, you deal directly with me from quote to completion. No salesmen, no subcontractors — just a skilled, friendly electrician who takes pride in every job. I treat every home as if it were my own.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Clock, label: "15+ Years", sub: "Experience" },
                { icon: Award, label: "Fully Qualified", sub: "& Insured" },
                { icon: Shield, label: "Part P", sub: "Certified" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-lg bg-muted">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-heading font-semibold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.sub}</div>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-xl font-bold text-foreground mb-4">Qualifications & Accreditations</h3>
            <ul className="space-y-2">
              {qualifications.map((q) => (
                <li key={q} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default About;
