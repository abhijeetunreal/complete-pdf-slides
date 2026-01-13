import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { CheckCircle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const DemoRequirementsSlide = ({ totalSlides }: Props) => {
  const requirements = [
    <><strong className="text-secondary">Power:</strong> A 12V 40Ah Car Battery (portable power) or a long extension cord</>,
    <><strong className="text-secondary">Environment:</strong> An open field or net area (min 20m length) to show trajectory</>,
    <><strong className="text-secondary">Targets:</strong> Cones placed at "Slip" and "Cover" positions to demonstrate Yaw actuator's accuracy</>,
    <><strong className="text-secondary">Data:</strong> A printed chart showing "Spin Modes" and corresponding Arduino settings for evaluators</>,
  ];

  return (
    <SlideLayout slideNumber={29} totalSlides={totalSlides}>
      <SectionBadge label="Final Demonstration" />
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="slide-title text-3xl md:text-4xl mt-6 mb-6">
        4.2 Requirements for Final Demonstration
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground mb-6">
        To demonstrate the Product Embodiment effectively:
      </motion.p>
      <HighlightBox title="Demo Checklist" icon={<CheckCircle className="w-5 h-5" />}>
        <BulletList items={requirements} />
      </HighlightBox>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-8 text-center">
        <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50">
          <p className="text-2xl font-bold text-primary">Thank You!</p>
          <p className="text-muted-foreground mt-2">Cricket Fielding Training Device (CFTD) - Prototype V1</p>
        </div>
      </motion.div>
    </SlideLayout>
  );
};
