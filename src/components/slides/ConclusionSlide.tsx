import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { HighlightBox } from "../presentation/HighlightBox";
import { Trophy, Cog, CheckCircle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const ConclusionSlide = ({ totalSlides }: Props) => {
  return (
    <SlideLayout slideNumber={18} totalSlides={totalSlides}>
      <SectionBadge label="Conclusion" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        CFTD Prototype V1 Summary
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-muted-foreground mb-8"
      >
        The CFTD Prototype V1 is defined as a <strong className="text-primary">4-Wheel, 4-Motor (775) automated launcher</strong>.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <HighlightBox title="Embodiment Win" icon={<Trophy className="w-5 h-5" />}>
            <p>The 4-wheel configuration beats the 2-wheel design by offering <strong className="text-secondary">superior grip and spin capabilities</strong> despite using smaller, cheaper motors.</p>
          </HighlightBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HighlightBox title="Mechanism Win" icon={<Cog className="w-5 h-5" />}>
            <p>Linear actuators provide <strong className="text-secondary">robust, automated aiming</strong> without the cost of precision robotics gears.</p>
          </HighlightBox>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <HighlightBox title="Feasibility" icon={<CheckCircle className="w-5 h-5" />}>
            <p>The BOM analysis confirms this can be built for <strong className="text-secondary">~₹28,700</strong>, leaving a small margin for safety, meeting the client's financial constraint.</p>
          </HighlightBox>
        </motion.div>
      </div>
    </SlideLayout>
  );
};
