import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import productRender from "../../assets/ProductRender(1).png";

interface Props {
  totalSlides: number;
}

export const AestheticsFormSlide1 = ({ totalSlides }: Props) => {
  return (
    <SlideLayout slideNumber={23} totalSlides={totalSlides}>
      <SectionBadge label="Aesthetic and Form" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-center h-full min-h-0"
      >
        <ImagePlaceholder 
          label="Aesthetic and Form Image 1"
          aspectRatio="video"
          src={productRender}
          alt="Product Render - Cricket Ball Throwing Machine"
        />
      </motion.div>
    </SlideLayout>
  );
};
