import { motion } from "framer-motion";
import { Shield, CheckCircle, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PartP = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-24 pb-16 section-dark">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl font-bold text-section-dark-foreground mb-4"
        >
          What is <span className="text-primary">Part P?</span>
        </motion.h1>
        <p className="text-section-dark-foreground/60 max-w-xl">
          Understanding Building Regulations for electrical work in your home.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center gap-3 mb-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <Shield className="h-8 w-8 text-primary shrink-0" />
          <p className="text-foreground font-medium">
            Part P is your guarantee that electrical work in your home has been carried out safely and to the required standard.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-6">
          <h2 className="font-heading text-2xl font-bold text-foreground">What is Part P of the Building Regulations?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Part P is a section of the Building Regulations for England and Wales that came into effect on <strong className="text-foreground">1st January 2005</strong>. It was introduced to reduce the number of deaths, injuries and fires caused by unsafe electrical installations in homes.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Part P requires that electrical installation work in dwellings is designed and installed to protect people from fire and electric shock. It applies to new installations, alterations, and additions to existing electrical systems in domestic properties.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-10">What Work Does Part P Cover?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Part P covers most electrical work in domestic properties, but certain types of work must be either carried out by a registered competent person or notified to your local Building Control body:
          </p>

          <div className="space-y-3">
            {[
              "Installation of a new consumer unit (fuse board)",
              "New circuits (e.g. kitchen ring main, shower circuit)",
              "Any electrical work in bathrooms and kitchens",
              "Work in special locations (e.g. swimming pools, saunas)",
              "Adding or altering circuits in a special location",
              "Full or partial house rewires",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-10">Why Does It Matter?</h2>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium mb-1">Non-compliant work can be dangerous and costly</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If electrical work is carried out without proper notification or by an unregistered person, your local authority can require you to have it inspected — or even ripped out and redone. It can also affect your home insurance and cause problems when selling your property.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mt-10">How We Help</h2>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <FileCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-medium mb-1">We're a Part P Registered Competent Person</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                As a registered electrician, we are authorised to self-certify our own work — meaning we handle all the building control notification for you. After every notifiable job, you'll receive an Electrical Installation Certificate and a Building Regulations Compliance Certificate, giving you complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button size="lg" className="font-heading font-semibold gap-2">
              <Shield className="h-5 w-5" /> Book a Part P Certified Electrician
            </Button>
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default PartP;
