import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Consumer unit installation", caption: "New consumer unit fitted in Cardiff" },
  { src: gallery2, alt: "First fix wiring", caption: "Full rewire — first fix wiring" },
  { src: gallery3, alt: "Kitchen LED lighting", caption: "LED downlights in kitchen extension" },
  { src: gallery4, alt: "Outdoor electrics", caption: "Garden lighting & outdoor sockets" },
  { src: gallery5, alt: "EV charger installation", caption: "EV charger installation" },
  { src: gallery6, alt: "Bathroom electrics", caption: "Bathroom extractor & lighting" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

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
            Our <span className="text-primary">Work</span>
          </motion.h1>
          <p className="text-section-dark-foreground/60 max-w-xl">
            A selection of recent projects across Cardiff and South Wales.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="cursor-pointer group relative overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelected(i)}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="font-heading font-semibold text-secondary-foreground text-sm">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 text-secondary-foreground hover:text-primary transition-colors" onClick={() => setSelected(null)}>
              <X className="h-8 w-8" />
            </button>
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
