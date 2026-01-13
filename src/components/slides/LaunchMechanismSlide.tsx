import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import cadModel from "../../assets/cadModel(1).png";

interface Props {
  totalSlides: number;
}

export const LaunchMechanismSlide = ({ totalSlides }: Props) => {
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
        <div className="lg:col-span-2">
          <ImagePlaceholder 
            label="CAD Model"
            description="CAD model showing the X-Drive Quad Head Design"
            aspectRatio="video"
            src={cadModel}
            alt="CAD Model - X-Drive Quad Head Design"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
