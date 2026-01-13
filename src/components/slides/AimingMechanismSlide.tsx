import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { ArrowUpDown, MoveHorizontal } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const AimingMechanismSlide = ({ totalSlides }: Props) => {
  const pitchPoints = [
    "Pivot Point is near the Center of Gravity (CG) of the head",
    <><strong className="text-secondary">Actuator Base:</strong> Attached to the main vertical post</>,
    <><strong className="text-secondary">Actuator Head:</strong> Attached to the bottom lever of the Throwing Head</>,
    <><strong className="text-primary">Extension = Tilt Up</strong></>,
  ];

  const yawPoints = [
    "The main vertical post rotates inside a base bearing (Lazy Susan or Thrust Bearing)",
    <><strong className="text-secondary">Actuator Base:</strong> Fixed to the tripod legs</>,
    <><strong className="text-secondary">Actuator Head:</strong> Attached to a crank arm welded to the rotating post</>,
    <><strong className="text-primary">Extension = Turn Left / Retraction = Turn Right</strong></>,
  ];

  return (
    <SlideLayout slideNumber={13} totalSlides={totalSlides}>
      <SectionBadge step="7" label="Detailed Embodiment (Continued)" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        7.2 Aiming Mechanism (Linear Actuators)
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-6">
        <HighlightBox title="Pitch (Vertical Motion)" icon={<ArrowUpDown className="w-5 h-5" />}>
          <BulletList items={pitchPoints} />
        </HighlightBox>

        <HighlightBox title="Yaw (Horizontal Motion)" icon={<MoveHorizontal className="w-5 h-5" />}>
          <BulletList items={yawPoints} />
        </HighlightBox>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <ImagePlaceholder 
          label="Pitch Actuator Mechanism"
          description="Linear actuator tilting the head vertically"
          aspectRatio="video"
        />
        <ImagePlaceholder 
          label="Yaw Actuator Mechanism"
          description="Crank linkage for horizontal rotation"
          aspectRatio="video"
        />
      </div>
    </SlideLayout>
  );
};
