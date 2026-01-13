import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { HighlightBox } from "../presentation/HighlightBox";
import { Settings } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const SpinControlLogicSlide = ({ totalSlides }: Props) => {
  const spinModes = [
    { mode: "Fast Ball", config: "All 4 motors @ 100% duty cycle", color: "text-primary" },
    { mode: "Top Spin", config: "Top pair @ 50%, Bottom pair @ 100%", color: "text-secondary" },
    { mode: "Side Spin", config: "Left pair @ 100%, Right pair @ 60%", color: "text-accent" },
    { mode: "Scramble/Wobble", config: "Diagonal pairs at differential speeds (e.g., TL/BR @ 100%, TR/BL @ 80%)", color: "text-primary" },
  ];

  return (
    <SlideLayout slideNumber={20} totalSlides={totalSlides}>
      <SectionBadge label="Spin Control Logic" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Motor Speed Control for Spin Variety
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {spinModes.map((spin, index) => (
          <motion.div
            key={spin.mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
          >
            <HighlightBox title={spin.mode} icon={<Settings className="w-5 h-5" />}>
              <p className={`text-lg ${spin.color} font-medium`}>{spin.config}</p>
              
              {/* Visual Motor Diagram */}
              <div className="mt-4 grid grid-cols-2 gap-2 max-w-[140px] mx-auto">
                {spin.mode === "Fast Ball" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-xs font-bold">100%</div>
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-xs font-bold">100%</div>
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-xs font-bold">100%</div>
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center text-xs font-bold">100%</div>
                  </>
                )}
                {spin.mode === "Top Spin" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-xs font-bold">50%</div>
                    <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-xs font-bold">50%</div>
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-background">100%</div>
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-background">100%</div>
                  </>
                )}
                {spin.mode === "Side Spin" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-background">100%</div>
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-xs font-bold">60%</div>
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-background">100%</div>
                    <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center text-xs font-bold">60%</div>
                  </>
                )}
                {spin.mode === "Scramble/Wobble" && (
                  <>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xs font-bold">100%</div>
                    <div className="w-12 h-12 rounded-full bg-primary/60 flex items-center justify-center text-xs font-bold">80%</div>
                    <div className="w-12 h-12 rounded-full bg-primary/60 flex items-center justify-center text-xs font-bold">80%</div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xs font-bold">100%</div>
                  </>
                )}
              </div>
            </HighlightBox>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};
