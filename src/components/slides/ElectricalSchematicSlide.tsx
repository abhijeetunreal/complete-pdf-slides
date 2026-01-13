import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { HighlightBox } from "../presentation/HighlightBox";
import { Zap } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const ElectricalSchematicSlide = ({ totalSlides }: Props) => {
  return (
    <SlideLayout slideNumber={16} totalSlides={totalSlides}>
      <SectionBadge step="9" label="Detailed System Architecture" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        9.1 Electrical Schematic
      </motion.h2>

      <HighlightBox title="System Wiring Diagram" icon={<Zap className="w-5 h-5" />}>
        <div className="font-mono text-sm space-y-6 p-4 bg-background/50 rounded-lg">
          {/* Power Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="text-primary font-bold">POWER DISTRIBUTION:</div>
            <div className="pl-4 border-l-2 border-primary/50">
              <div>Battery 12V/24V → Fuse Box</div>
              <div className="pl-4">├── BTS7960 Motor Drivers x4</div>
              <div className="pl-4">├── L298N/Relay for Actuators</div>
              <div className="pl-4">└── Arduino Mega + 5V Regulator</div>
            </div>
          </motion.div>

          {/* Motor Control */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="space-y-2"
          >
            <div className="text-secondary font-bold">MOTOR CONTROL (PWM from Arduino):</div>
            <div className="pl-4 border-l-2 border-secondary/50">
              <div>Drivers → M1 [775 Motor Top-L]</div>
              <div className="pl-8">→ M2 [775 Motor Top-R]</div>
              <div className="pl-8">→ M3 [775 Motor Bot-L]</div>
              <div className="pl-8">→ M4 [775 Motor Bot-R]</div>
            </div>
          </motion.div>

          {/* Actuator Control */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="space-y-2"
          >
            <div className="text-accent font-bold">ACTUATOR CONTROL (Signal from Arduino):</div>
            <div className="pl-4 border-l-2 border-accent/50">
              <div>Actuators → LA1 [Linear Actuator - Pitch]</div>
              <div className="pl-12">→ LA2 [Linear Actuator - Yaw]</div>
            </div>
          </motion.div>

          {/* Solenoid Control */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="space-y-2"
          >
            <div className="text-primary font-bold">FEEDER CONTROL:</div>
            <div className="pl-4 border-l-2 border-primary/50">
              <div>SolenoidRelay → Solenoid [Feeder Piston]</div>
            </div>
          </motion.div>
        </div>
      </HighlightBox>
    </SlideLayout>
  );
};
