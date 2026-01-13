import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { Cog } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const LaunchMechanismSlide = ({ totalSlides }: Props) => {
  const conceptPoints = [
    <><strong className="text-secondary">Geometry:</strong> Four motors mounted at 90° intervals (X-shape)</>,
    <><strong className="text-secondary">Wheel Contact:</strong> The ball is gripped by 4 points simultaneously</>,
  ];

  const motorDetails = [
    <><strong className="text-secondary">Motor Selection:</strong> 775 DC Motors</>,
    <><strong className="text-primary">Pros:</strong> Extremely cheap (approx ₹600-800 each), high RPM (10,000+), widely available</>,
    <><strong className="text-accent">Cons:</strong> Lower torque than CIMs</>,
    <><strong className="text-secondary">Solution:</strong> Use 4 motors sharing the load. The combined torque of 4x 775s is sufficient to launch a 160g ball to 100km/h</>,
  ];

  return (
    <SlideLayout slideNumber={6} totalSlides={totalSlides}>
      <SectionBadge step="4" label="Preliminary Layouts & Form Designs" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        4.1 Launch Mechanism: The "X-Drive" Quad Head
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <HighlightBox title="Concept" icon={<Cog className="w-5 h-5" />}>
            <BulletList items={conceptPoints} />
          </HighlightBox>

          <div>
            <h3 className="text-lg font-bold mb-3 text-primary">Motor Details</h3>
            <BulletList items={motorDetails} delay={0.4} />
          </div>
        </div>

        <div className="space-y-4">
          <ImagePlaceholder 
            label="X-Drive Quad Head Design"
            description="4 motors in X-configuration with ball grip points"
            aspectRatio="square"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
