import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Shield, Star, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-electrician.jpg";

const reviews = [
  { name: "Sarah J.", text: "Fantastic work on our full rewire. Clean, professional and on time. Highly recommend!", rating: 5 },
  { name: "David P.", text: "Had a new consumer unit fitted. Excellent job, very knowledgeable and tidy worker.", rating: 5 },
  { name: "Emma T.", text: "Called for an emergency and he was out within the hour. Lifesaver! Great price too.", rating: 5 },
  { name: "Mark R.", text: "Installed downlights throughout our kitchen extension. Brilliant finish, really pleased.", rating: 5 },
  { name: "Lisa W.", text: "Very reliable and trustworthy. Has done multiple jobs for us now. Wouldn't use anyone else.", rating: 5 },
  { name: "James H.", text: "EV charger installed quickly and cleanly. Explained everything clearly. Top bloke!", rating: 5 },
  { name: "Karen B.", text: "Rewired our 1930s semi. Minimal disruption and the finish was immaculate.", rating: 4 },
  { name: "Tom C.", text: "Great communication from start to finish. Fair pricing and quality workmanship.", rating: 5 },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
    ))}
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-bg overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional electrician at work" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase">Part P Certified · NICEIC Approved</span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
                Your Trusted Local
                <span className="text-primary text-glow block">Electrician</span>
              </h1>
              <p className="text-secondary-foreground/80 text-lg md:text-xl mb-4 leading-relaxed max-w-lg">
                Professional domestic & commercial electrical services across Cardiff, South Wales & the South West. Quality workmanship guaranteed.
              </p>
              <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm mb-8">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Cardiff · South Wales · South West England</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 font-heading font-semibold text-base px-8">
                    Get a Free Quote <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href="tel:07700900000">
                  <Button size="lg" variant="outline" className="gap-2 font-heading font-semibold text-base px-8 border-primary/30 text-secondary-foreground hover:bg-primary/10">
                    <Phone className="h-5 w-5" /> Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-card border-y border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Jobs Completed", value: "2,000+" },
              { label: "Star Rating", value: "4.9★" },
              { label: "Part P Certified", value: "✓" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">From simple socket installations to complete rewires — no job too big or small.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Consumer Unit Upgrades",
              "Full & Partial Rewires",
              "LED Lighting Installation",
              "EV Charger Installation",
              "Fault Finding & Repairs",
              "EICR Testing & Certificates",
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="font-medium text-card-foreground">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="gap-2 font-heading">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scrolling Reviews */}
      <section className="section-dark py-16 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground mb-2">What Our Customers Say</h2>
          <p className="text-section-dark-foreground/60">Over 200 five-star reviews from happy customers</p>
        </div>
        <div className="relative">
          <div className="flex animate-scroll-reviews gap-6 w-max">
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="w-80 shrink-0 bg-secondary/50 border border-primary/10 rounded-xl p-6"
              >
                <StarRating rating={review.rating} />
                <p className="text-section-dark-foreground/80 text-sm mt-3 mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-heading font-semibold text-primary text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need an Electrician?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Get in touch today for a free, no-obligation quote. Fast response guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 font-heading font-semibold px-8">
                Request a Quote <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:07700900000">
              <Button size="lg" variant="outline" className="gap-2 font-heading font-semibold px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="h-5 w-5" /> 07700 900 000
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
