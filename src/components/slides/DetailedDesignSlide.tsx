import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { Settings, Zap } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const DetailedDesignSlide = ({ totalSlides }: Props) => {
  const launchSystemPoints = [
    <><strong className="text-secondary">Geometry:</strong> Four motors mounted at 90° intervals (X-shape) between two parallel plates</>,
    <><strong className="text-secondary">Wheel Spacing (Critical):</strong> The gap between opposing wheels is set to 68mm</>,
    <><strong className="text-secondary">Engineering Logic:</strong> A standard cricket ball is ~72mm. A 68mm gap provides 4mm of compression, ensuring sufficient grip to transfer kinetic energy without stalling the lower-torque 775 motors</>,
    <><strong className="text-secondary">Motors:</strong> RS-775 DC Motors (12V/24V, ~10,000 RPM free run)</>,
    <><strong className="text-secondary">Torque Management:</strong> Individual 775 motors have low torque. By using 4 motors, the load is distributed, allowing the system to reach exit velocities of 80-100 km/h</>,
  ];

  return (
    <SlideLayout slideNumber={18} totalSlides={totalSlides}>
      <SectionBadge label="Detailed Design of Chosen Concept" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-4"
      >
        1.1 Embodiment Design Overview
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-muted-foreground mb-6"
      >
        The chosen concept is the <strong className="text-primary">"Quad-Motor X-Drive Launcher"</strong>.
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-6">
        <HighlightBox title="A. The Launch Sub-System (The Head)" icon={<Zap className="w-5 h-5" />}>
          <BulletList items={launchSystemPoints} />
        </HighlightBox>

        <div className="space-y-4">
          <ImagePlaceholder 
            label="X-Drive Launch Head"
            description="Four motors in X-shape configuration with 68mm wheel gap"
            aspectRatio="square"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
