import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { ArrowUpDown, MoveHorizontal, CircleDot } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const AimingFeedingSubsystemSlide = ({ totalSlides }: Props) => {
  const pitchPoints = [
    <><strong className="text-secondary">Mounting:</strong> The actuator base is fixed to the vertical mast. The rod end connects to the bottom of the launch head frame</>,
    <><strong className="text-secondary">Kinematics:</strong> Extension pushes the head upward, pivoting around the center of gravity axle. Range: 0° to 45°</>,
  ];

  const yawPoints = [
    <><strong className="text-secondary">Mechanism:</strong> Crank Arm Linkage. The mast sits on a thrust bearing. The actuator pushes a lever arm welded to the mast</>,
    <><strong className="text-secondary">Kinematics:</strong> 100mm stroke translates to a ±30° sweep, covering the slip cordon and point regions</>,
  ];

  const feedingPoints = [
    <><strong className="text-secondary">Mechanism:</strong> Gravity-fed PVC tube (3-inch dia) leading to a "ready chamber"</>,
    <><strong className="text-secondary">Actuation:</strong> 12V Push-Type Solenoid (30mm stroke)</>,
    <><strong className="text-secondary">Trigger Logic:</strong> The solenoid is interlocked with motor speed. It only fires when the control loop confirms motors are at the target PWM, preventing ball jams from weak launches</>,
  ];

  return (
    <SlideLayout slideNumber={20} totalSlides={totalSlides}>
      <SectionBadge label="Aiming & Feeding Sub-Systems" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        B. Aiming & C. Feeding Sub-Systems
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-4">
        <HighlightBox title="Pitch (Elevation)" icon={<ArrowUpDown className="w-5 h-5" />}>
          <p className="text-sm text-muted-foreground mb-2">Controlled by a 100mm Stroke Linear Actuator (12V)</p>
          <BulletList items={pitchPoints} />
        </HighlightBox>

        <HighlightBox title="Yaw (Horizontal Pan)" icon={<MoveHorizontal className="w-5 h-5" />}>
          <p className="text-sm text-muted-foreground mb-2">Controlled by a second 100mm Stroke Linear Actuator</p>
          <BulletList items={yawPoints} />
        </HighlightBox>

        <HighlightBox title="C. Feeding Sub-System" icon={<CircleDot className="w-5 h-5" />}>
          <BulletList items={feedingPoints} />
        </HighlightBox>
      </div>

      <div className="mt-4">
        <ImagePlaceholder 
          label="Complete Aiming & Feeding System Assembly"
          description="Showing pitch/yaw actuators with gravity-fed ball tube"
          aspectRatio="wide"
        />
      </div>
    </SlideLayout>
  );
};
