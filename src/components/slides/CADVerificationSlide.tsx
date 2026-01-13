import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { CheckCircle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const CADVerificationSlide = ({ totalSlides }: Props) => {
  const alignmentPoints = [
    <><strong className="text-secondary">Image 1 & 6 (Head):</strong> Matches the 4-motor X-configuration description</>,
    <><strong className="text-secondary">Image 2 (Actuator):</strong> Matches the 100mm linear actuator specification for tilt</>,
    <><strong className="text-secondary">Image 5 (Base):</strong> Matches the cost-effective welded frame base</>,
  ];

  return (
    <SlideLayout slideNumber={16} totalSlides={totalSlides}>
      <SectionBadge step="9" label="CAD Verification" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        9.2 CAD Alignment Verification
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-muted-foreground mb-6"
      >
        The design detailed above aligns perfectly with the supplied visual data:
      </motion.p>

      <HighlightBox title="Verification Status" icon={<CheckCircle className="w-5 h-5" />}>
        <BulletList items={alignmentPoints} />
      </HighlightBox>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <ImagePlaceholder 
          label="CAD Image 1 & 6: Head"
          description="4-motor X-configuration"
          aspectRatio="square"
        />
        <ImagePlaceholder 
          label="CAD Image 2: Actuator"
          description="100mm linear actuator"
          aspectRatio="square"
        />
        <ImagePlaceholder 
          label="CAD Image 5: Base"
          description="Welded frame structure"
          aspectRatio="square"
        />
      </div>
    </SlideLayout>
  );
};
