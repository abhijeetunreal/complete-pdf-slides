import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { CircleDot, Shield, Wrench } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const SolenoidFeederSlide = ({ totalSlides }: Props) => {
  const feederPoints = [
    "A hopper/tube aligns balls",
    "The solenoid is mounted behind the \"ready\" position",
    "The microcontroller triggers the solenoid only when wheels are at target RPM",
  ];

  const safetyPoints = [
    <><strong className="text-secondary">775 Motor Safety:</strong> These motors spin very fast. The design includes a mesh guard (chicken wire or plastic sheet) around the head to prevent fingers touching spinning wheels</>,
    <><strong className="text-secondary">Current Limiting:</strong> The BTS7960 drivers have thermal protection, preventing fire if wheels jam</>,
  ];

  const diyPoints = [
    <><strong className="text-secondary">No CNC required:</strong> The frame can be built using standard square tubing and hand-drilled plates</>,
    <><strong className="text-secondary">Standard Parts:</strong> All parts (motors, drivers, actuators) are Amazon/Robu standard items, ensuring easy replacement</>,
  ];

  return (
    <SlideLayout slideNumber={15} totalSlides={totalSlides}>
      <SectionBadge step="7-8" label="Feeder & Design-For-X" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        7.3 Solenoid Feeder & DFX Considerations
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-6">
        <HighlightBox title="Solenoid Feeder" icon={<CircleDot className="w-5 h-5" />}>
          <BulletList items={feederPoints} />
        </HighlightBox>

        <HighlightBox title="8.1 Design for Safety" icon={<Shield className="w-5 h-5" />}>
          <BulletList items={safetyPoints} />
        </HighlightBox>

        <HighlightBox title="8.2 Design for Manufacturability" icon={<Wrench className="w-5 h-5" />}>
          <BulletList items={diyPoints} />
        </HighlightBox>
      </div>

      <div className="mt-6">
        <ImagePlaceholder 
          label="Solenoid Ball Feeding Mechanism"
          description="Gravity-fed PVC tube with solenoid actuation"
          aspectRatio="wide"
        />
      </div>
    </SlideLayout>
  );
};
