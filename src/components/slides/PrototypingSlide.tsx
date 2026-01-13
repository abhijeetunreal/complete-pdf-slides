import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { AlertTriangle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const PrototypingSlide = ({ totalSlides }: Props) => {
  const gripTest = [
    <><strong className="text-secondary">Risk:</strong> 775 motors stall easily if compression is too high (&gt;5mm), but ball slips if too low (&lt;2mm)</>,
    <><strong className="text-secondary">Test:</strong> "Static Squeeze Rig" - Mount two motors on sliding rail with load cell</>,
    <><strong className="text-secondary">Procedure:</strong> Push cricket ball through at gaps of 65mm, 68mm, and 70mm</>,
    <><strong className="text-secondary">Metric:</strong> Current draw &lt;15A (safe for BTS7960) but exit velocity &gt;80 km/h</>,
  ];

  const crankTest = [
    <><strong className="text-secondary">Risk:</strong> 100mm linear actuator may not provide full ±30° yaw sweep if lever arm is wrong length</>,
  ];

  const solenoidTest = [
    <><strong className="text-secondary">Risk:</strong> Firing ball before motors recover RPM results in a "dead ball"</>,
    <><strong className="text-secondary">Test:</strong> "Code Loop Verification" - Arduino + Solenoid + LED</>,
    <><strong className="text-secondary">Procedure:</strong> Code a "Recovery Delay" (e.g., 3000ms)</>,
    <><strong className="text-secondary">Metric:</strong> Solenoid refuses to fire if trigger pressed before timer expires</>,
  ];

  return (
    <SlideLayout slideNumber={24} totalSlides={totalSlides}>
      <SectionBadge label="Justified Prototyping" />
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="slide-title text-3xl md:text-4xl mt-6 mb-6">
        3. Critical Sub-System Prototyping
      </motion.h2>
      <p className="text-muted-foreground mb-6">We prototype three critical risks before building the full machine.</p>
      <div className="grid lg:grid-cols-3 gap-4">
        <HighlightBox title="3.1 Grip vs. Stall Balance" icon={<AlertTriangle className="w-5 h-5" />}>
          <BulletList items={gripTest} />
        </HighlightBox>
        <HighlightBox title="3.2 Crank Linkage Geometry" icon={<AlertTriangle className="w-5 h-5" />}>
          <BulletList items={crankTest} />
        </HighlightBox>
        <HighlightBox title="3.3 Solenoid Timing Logic" icon={<AlertTriangle className="w-5 h-5" />}>
          <BulletList items={solenoidTest} />
        </HighlightBox>
      </div>
    </SlideLayout>
  );
};
