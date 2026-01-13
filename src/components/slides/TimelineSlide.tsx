import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { Calendar } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const TimelineSlide = ({ totalSlides }: Props) => {
  const weeks = [
    { title: "Week 1: Procurement & Electronics Validation", items: ["Order Motors, Drivers, Actuators (Robu/Amazon)", "Bench Test: Run all 4 motors for 10 mins to check heating", "Code: Write Arduino PWM mixing logic (spin profiles)"] },
    { title: "Week 2: Structural Fabrication", items: ["Laser Cutting: Send DXF files for Head Plates", "Welding: Fabricate H-Base and Vertical Mast", "Mounting: Drill holes for Linear Actuators"] },
    { title: "Week 3: Integration & Wiring", items: ["Mount motors to head plates using couplers", "Install safety mesh guard", "Wiring: Battery → Fuse → Drivers → Motors", "Integrate Solenoid feeder tube"] },
    { title: "Week 4: Calibration & Finishing", items: ["Field Test: Calibrate Pitch actuator timings", "Aesthetics: Spray paint frame Matte Black", "Final Assembly: Cable ties and warning stickers"] },
  ];

  return (
    <SlideLayout slideNumber={25} totalSlides={totalSlides}>
      <SectionBadge label="Procurement & Production Plan" />
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="slide-title text-3xl md:text-4xl mt-6 mb-6">
        4.1 Detailed Timeline (4 Weeks)
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-4">
        {weeks.map((week, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.1 }}>
            <HighlightBox title={week.title} icon={<Calendar className="w-5 h-5" />}>
              <BulletList items={week.items} />
            </HighlightBox>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
};
