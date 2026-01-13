import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { StatCard } from "../presentation/StatCard";

interface Props {
  totalSlides: number;
}

export const SpatialConstraintsSlide = ({ totalSlides }: Props) => {
  const deploymentPoints = [
    <><strong className="text-secondary">Range:</strong> Targeted for 25m - 45m radius (Slip cordon, Point, Cover)</>,
    <><strong className="text-secondary">Clearance:</strong> Device sits on a tripod/base structure approx 1m high</>,
    <><strong className="text-secondary">Safety:</strong> Enclosed throwing head to prevent hand injury during loading</>,
  ];

  return (
    <SlideLayout slideNumber={4} totalSlides={totalSlides}>
      <SectionBadge step="2" label="Spatial Constraints & Site Analysis" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Field Deployment Analysis
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">2.1 Field Deployment</h3>
          <BulletList items={deploymentPoints} />

          <div className="grid grid-cols-3 gap-4 mt-8">
            <StatCard value="25-45m" label="Target Range" delay={0.3} />
            <StatCard value="1m" label="Device Height" delay={0.4} />
            <StatCard value="<15kg" label="Weight Target" delay={0.5} />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ImagePlaceholder 
            label="Field Deployment Diagram"
            description="Cricket field layout showing slip cordon, point, and cover positions"
            aspectRatio="square"
          />
        </motion.div>
      </div>
    </SlideLayout>
  );
};
