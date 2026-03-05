import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reviews = [
  { name: "Sarah Jenkins", location: "Cardiff", rating: 5, text: "Fantastic work on our full rewire. The house is a 1920s terrace and he managed to route everything with minimal disruption. Clean, professional and finished on time. Can't recommend highly enough!" },
  { name: "David Powell", location: "Penarth", rating: 5, text: "Had a new consumer unit fitted after our old one failed an inspection. Excellent job, very knowledgeable. Explained everything clearly and left the place spotless." },
  { name: "Emma Thomas", location: "Barry", rating: 5, text: "Called for an emergency — tripping electrics at 9pm on a Friday. He was out within the hour and found the fault quickly. Absolute lifesaver. Very reasonable price too." },
  { name: "Mark Roberts", location: "Bridgend", rating: 5, text: "Installed LED downlights throughout our kitchen extension. Brilliant finish, really pleased with the result. He also spotted a dodgy connection from the previous electrician and fixed it." },
  { name: "Lisa Williams", location: "Cowbridge", rating: 5, text: "Very reliable and trustworthy. Has done multiple jobs for us now including a garage rewire and outdoor lighting. Wouldn't use anyone else — always our first call." },
  { name: "James Hughes", location: "Newport", rating: 5, text: "EV charger installed quickly and cleanly. He handled all the paperwork and grant applications too. Top bloke who clearly knows his stuff." },
  { name: "Karen Barker", location: "Pontypridd", rating: 4, text: "Rewired our 1930s semi-detached. Took 5 days as quoted, minimal mess and the finish was immaculate. All certificates provided same day." },
  { name: "Tom Clarke", location: "Swansea", rating: 5, text: "Great communication from start to finish. Sent photos of the work as he went along. Fair pricing and quality workmanship. Five stars all day." },
  { name: "Rachel Davies", location: "Llantrisant", rating: 5, text: "New bathroom electrics including extractor fan and spotlights. Everything works perfectly. Very tidy and professional throughout." },
  { name: "Andrew Morgan", location: "Caerphilly", rating: 5, text: "EICR inspection for our rental property. Very thorough, clear report and explained everything we needed to know. Great service." },
  { name: "Helen Price", location: "Bristol", rating: 5, text: "Travelled from Cardiff to do our fuse board upgrade. Professional, reasonably priced and a really nice guy. Would happily use again." },
  { name: "Stuart Evans", location: "Chepstow", rating: 5, text: "Installed outdoor sockets and garden lighting for our patio area. Looks amazing now. Quality work at a fair price." },
];

const totalReviews = 247;
const avgRating = 4.9;

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
    ))}
  </div>
);

const Reviews = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-24 pb-16 section-dark">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl font-bold text-section-dark-foreground mb-4"
        >
          Customer <span className="text-primary">Reviews</span>
        </motion.h1>
        <p className="text-section-dark-foreground/60 max-w-xl">
          Real feedback from real customers. We're proud of every review.
        </p>
      </div>
    </section>

    {/* Summary */}
    <section className="py-10 bg-card border-b border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-8">
        <div className="text-center">
          <div className="font-heading text-5xl font-bold text-primary">{avgRating}</div>
          <div className="flex justify-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
        </div>
        <div className="h-12 w-px bg-border hidden sm:block" />
        <div className="text-center">
          <div className="font-heading text-5xl font-bold text-foreground">{totalReviews}</div>
          <div className="text-sm text-muted-foreground mt-1">Total Reviews</div>
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-heading font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <Quote className="h-6 w-6 text-primary/30" />
              </div>
              <StarRating rating={review.rating} />
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Reviews;
