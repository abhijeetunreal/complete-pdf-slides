import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { HighlightBox } from "../presentation/HighlightBox";
import { CheckCircle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const MorphologicalMatrixSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "subFunction", header: "Sub-Function", width: "140px" },
    { key: "optionA", header: "Option A (High Cost)" },
    { key: "optionB", header: "Option B (Mechanical)" },
    { key: "optionC", header: "Option C (Selected Prototype)" },
  ];

  const data = [
    { subFunction: "Motors", optionA: "BLDC Drone Motors", optionB: "AC Induction", optionC: <span className="text-primary font-semibold">Brushed 775 DC</span> },
    { subFunction: "Wheels", optionA: "4", optionB: "2", optionC: <span className="text-primary font-semibold">4 (X-Config)</span> },
    { subFunction: "Aiming", optionA: "Stepper/Servo", optionB: "Manual Lock", optionC: <span className="text-primary font-semibold">Linear Actuator (100mm)</span> },
    { subFunction: "Controller", optionA: "NVIDIA Jetson", optionB: "Analog Potentiometers", optionC: <span className="text-primary font-semibold">Arduino/ESP32</span> },
    { subFunction: "Power", optionA: "48V LiFePO4", optionB: "Mains AC", optionC: <span className="text-primary font-semibold">12V/24V Lead Acid/Li-Ion</span> },
  ];

  return (
    <SlideLayout slideNumber={8} totalSlides={totalSlides}>
      <SectionBadge step="5" label="Morphological Matrix & Concept Selection" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Concept Comparison & Selection
      </motion.h2>

      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8"
      >
        <HighlightBox title="Conclusion" icon={<CheckCircle className="w-5 h-5" />}>
          <p className="text-lg">
            The <strong className="text-secondary">Option C configuration</strong> is the only one that satisfies the 
            <span className="text-primary font-bold"> ₹30k budget</span> while maintaining the 4-motor topology seen in the CAD design.
          </p>
        </HighlightBox>
      </motion.div>
    </SlideLayout>
  );
};
