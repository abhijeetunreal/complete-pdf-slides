import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import cmfRender from "../../assets/CMF(1).png";

interface Props {
  totalSlides: number;
}

export const AestheticsFormSlide2 = ({ totalSlides }: Props) => {
  return (
    <SlideLayout slideNumber={24} totalSlides={totalSlides}>
      <SectionBadge label="Aesthetic and Form" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center h-full min-h-0"
      >
        <ImagePlaceholder 
          label="Aesthetic and Form Image 2"
          aspectRatio="video"
          src={cmfRender}
          alt="CMF Render - Color, Material, Finish Design"
        />
      </motion.div>
    </SlideLayout>
  );
};
