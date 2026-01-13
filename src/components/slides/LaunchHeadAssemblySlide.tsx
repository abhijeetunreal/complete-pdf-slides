import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { ImagePlaceholder } from "../presentation/ImagePlaceholder";
import { HighlightBox } from "../presentation/HighlightBox";
import { Settings } from "lucide-react";
import headMount from "../../assets/headmount.png";

interface Props {
  totalSlides: number;
}

export const LaunchHeadAssemblySlide = ({ totalSlides }: Props) => {
  const structurePoints = [
    <><strong className="text-secondary">Structure:</strong> Two vertical plates (Aluminum or thick Acrylic) separated by spacers</>,
    <><strong className="text-secondary">Mounting:</strong> The 775 motors are face-mounted to the plates</>,
    <><strong className="text-secondary">Wheel Gap:</strong> Critical! For a cricket ball (~72mm dia), the wheel gap should be approx 68-70mm to ensure compression (grip) without stalling the motors</>,
  ];

  const controlLogic = [
    <><strong className="text-primary">Fast Ball:</strong> All 4 motors 100% speed</>,
    <><strong className="text-primary">Top Spin:</strong> Top 2 motors 50%, Bottom 2 motors 100%</>,
    <><strong className="text-primary">Side Spin:</strong> Left 2 motors 100%, Right 2 motors 60%</>,
  ];

  return (
    <SlideLayout slideNumber={13} totalSlides={totalSlides}>
      <SectionBadge step="7" label="Detailed Embodiment & Assembly" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        7.1 The Launch Head (Quad-Motor Assembly)
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 text-primary">Structure & Mounting</h3>
            <BulletList items={structurePoints} />
          </div>

          <HighlightBox title="Control Logic" icon={<Settings className="w-5 h-5" />}>
            <BulletList items={controlLogic} delay={0.4} />
          </HighlightBox>
        </div>

        <div className="space-y-4">
          <ImagePlaceholder 
            label="Quad-Motor Head Assembly"
            description="Two parallel plates with 4 x 775 motors in X-configuration"
            aspectRatio="square"
            src={headMount}
            alt="Quad-Motor Head Assembly - Two parallel plates with 4 x 775 motors in X-configuration"
          />
        </div>
      </div>
    </SlideLayout>
  );
};
