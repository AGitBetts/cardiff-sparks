import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WORKER_URL = "https://contactformhandler.alexbetts19.workers.dev";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim() || !form.requirements.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          message: form.requirements,
        }),
      });

      const data = await reponse.json();
      if (data.success) {
        toast.success("Enquiry sent! We'll be in touch shortly.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", requirements: ""});
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch (error) {
      toast.error("Unable to send message. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24 pb-16 section-dark">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-section-dark-foreground mb-4"
          >
            Get In <span className="text-primary">Touch</span>
          </motion.h1>
          <p className="text-section-dark-foreground/60 max-w-xl">
            Ready to get started? Fill in the form below or give us a call.
          </p>
        </div>
      </section>

      {/* Phone banner */}
      <section className="bg-primary py-4">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Phone className="h-5 w-5 text-primary-foreground" />
          <a href="tel:07700900000" className="font-heading text-xl font-bold text-primary-foreground hover:underline">
            07700 900 000
          </a>
          <span className="text-primary-foreground/70 text-sm">— Call anytime for a free quote</span>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">First Name *</label>
                    <Input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John" maxLength={100} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name *</label>
                    <Input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith" maxLength={100} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address *</label>
                  <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" maxLength={255} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                  <Input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="07700 900 000" maxLength={20} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Requirements *</label>
                  <Textarea
                    name="requirements"
                    value={form.requirements}
                    onChange={handleChange}
                    placeholder="Please describe the work you need doing, your location, and any other details..."
                    rows={5}
                    maxLength={2000}
                  />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto font-heading font-semibold gap-2">
                  <Send className="h-5 w-5" />
                  {submitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="p-6 rounded-xl bg-muted space-y-6">
                <h3 className="font-heading text-lg font-bold text-foreground">Contact Details</h3>
                <div className="space-y-4">
                  <a href="tel:07700900000" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">07700 900 000</div>
                    </div>
                  </a>
                  <a href="mailto:info@sparkselectrical.co.uk" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">info@sparkselectrical.co.uk</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Service Area</div>
                      <div className="font-medium text-foreground">Cardiff, South Wales & South West</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-2">Response Times</h4>
                  <p className="text-muted-foreground text-sm">We aim to respond to all enquiries within 2 hours during business hours. Emergency calls are answered 24/7.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
