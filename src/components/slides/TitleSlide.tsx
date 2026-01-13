import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { Target, Zap, Settings } from "lucide-react";

interface TitleSlideProps {
  totalSlides: number;
}

export const TitleSlide = ({ totalSlides }: TitleSlideProps) => {
  return (
    <SlideLayout slideNumber={1} totalSlides={totalSlides}>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-badge mb-8"
        >
          PRESENTATION 4
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="slide-title max-w-4xl mb-6"
        >
          Product Embodiment Design & Detailing
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-4"
        >
          Cricket Fielding Training Device (CFTD)
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-xl text-muted-foreground mb-12"
        >
          Prototype V1
        </motion.p>

        {/* Key Features Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border">
            <Target className="w-6 h-6 text-primary" />
            <span className="font-medium">4-Axis Spin Control</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border">
            <Zap className="w-6 h-6 text-secondary" />
            <span className="font-medium">80-100 km/h Velocity</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card border border-border">
            <Settings className="w-6 h-6 text-accent" />
            <span className="font-medium">Budget: ₹30,000</span>
          </div>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
