import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { HighlightBox } from "../presentation/HighlightBox";
import { BulletList } from "../presentation/BulletList";
import { Lightbulb } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const FunctionCarriersSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "main", header: "Main Function", width: "120px" },
    { key: "sub", header: "Sub-Function" },
    { key: "options", header: "Embodiment Options" },
    { key: "selected", header: "Selected for Prototype" },
  ];

  const data = [
    { main: "Launch Ball", sub: "Energy Source", options: "Pneumatic vs. Flywheel", selected: "Flywheel (Motors)" },
    { main: "Configuration", sub: "Wheel Setup", options: "2-Wheel vs. 3-Wheel vs. 4-Wheel", selected: "4-Wheel (X-Drive)" },
    { main: "Aim & Orient", sub: "Yaw Control", options: "Stepper Turret vs. Linkage", selected: "Linear Actuator" },
    { main: "", sub: "Pitch Control", options: "Servo Gear vs. Linear Actuator", selected: "Linear Actuator" },
    { main: "Ball Feed", sub: "Singulation", options: "Star Wheel vs. Piston", selected: "Solenoid Piston" },
  ];

  const whyFourWheels = [
    "A 2-wheel machine can only do top/back spin",
    "A 3-wheel machine is complex to program",
    "4-wheel X-configuration provides superior grip and all spin types",
  ];

  return (
    <SlideLayout slideNumber={5} totalSlides={totalSlides}>
      <SectionBadge step="3" label="Embodiment-Determining Main Function Carriers" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Function Structure Mapping
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg mb-6"
      >
        To meet the high-spin requirement (K1) within budget (K2), we select the following function carriers:
      </motion.p>

      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6"
      >
        <HighlightBox title="Why 4 Wheels (X-Drive)?" icon={<Lightbulb className="w-5 h-5" />}>
          <BulletList items={whyFourWheels} delay={0.6} />
        </HighlightBox>
      </motion.div>
    </SlideLayout>
  );
};
