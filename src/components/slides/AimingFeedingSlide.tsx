import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { Move, Crosshair } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const AimingFeedingSlide = ({ totalSlides }: Props) => {
  const aimingPoints = [
    <><strong className="text-secondary">Pitch (Vertical):</strong> The head pivots on a central axle. The 100mm linear actuator pushes the bottom of the head frame, tilting the muzzle upward.</>,
    <><strong className="text-secondary">Yaw (Horizontal):</strong> The entire fork assembly sits on a pivot bearing. A second 100mm linear actuator connects the static base to the rotating fork. Extending/retracting creates a "crank" motion, turning the head left/right.</>,
  ];

  const feedingPoints = [
    "Gravity-fed tube drops ball into a \"waiting chamber\"",
    "A 12V High-Torque Solenoid kicks the ball into the spinning wheels",
    <><strong className="text-primary">Benefit:</strong> Precise timing control (allows "rapid fire" or "random interval" drills)</>,
  ];

  return (
    <SlideLayout slideNumber={7} totalSlides={totalSlides}>
      <SectionBadge step="4" label="Preliminary Layouts (Continued)" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Aiming System & Feeding Mechanism
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <HighlightBox title="4.2 Aiming System: Dual Linear Actuation" icon={<Crosshair className="w-5 h-5" />}>
            <BulletList items={aimingPoints} />
          </HighlightBox>
        </div>

        <div className="space-y-6">
          <HighlightBox title="4.3 Feeding Mechanism: Solenoid" icon={<Move className="w-5 h-5" />}>
            <BulletList items={feedingPoints} />
          </HighlightBox>
          
          <ImagePlaceholder 
            label="Linear Actuator Mechanism"
            description="100mm stroke linear actuator for pitch/yaw control"
            aspectRatio="video"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
