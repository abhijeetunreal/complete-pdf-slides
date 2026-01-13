import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { HighlightBox } from "../presentation/HighlightBox";
import { CheckCircle } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const MechanicalBOMSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "component", header: "Component" },
    { key: "specification", header: "Specification" },
    { key: "material", header: "Material" },
    { key: "cost", header: "Estimate Cost (₹)", width: "140px" },
  ];

  const data = [
    { component: "Throwing Head Frame", specification: "Aluminum Channels / Acrylic Plates", material: "Custom laser cut / Hand cut", cost: "3,000" },
    { component: "Base Stand", specification: "Mild Steel Square Tube (Welded/Bolted)", material: "6 meters + fabrication", cost: "3,000" },
    { component: "Feeding Tube", specification: "PVC Pipe (3 inch)", material: "1 meter", cost: "500" },
    { component: "Bearings/Hardware", specification: "Pivot bearings, M5/M8 Bolts, Nuts", material: "Assorted", cost: "2,000" },
  ];

  return (
    <SlideLayout slideNumber={11} totalSlides={totalSlides}>
      <SectionBadge step="6" label="Component Sourcing (Continued)" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        6.2 Mechanical Structure & Fabrication
      </motion.h2>

      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 p-6 rounded-xl bg-card border border-border"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-muted-foreground">Structure Subtotal:</span>
          <span className="text-2xl font-bold">₹8,500</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-6"
      >
        <HighlightBox title="Budget Status" icon={<CheckCircle className="w-5 h-5" />}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">₹28,700</div>
              <div className="text-muted-foreground mt-1">Total Estimated Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">₹1,300</div>
              <div className="text-muted-foreground mt-1">Buffer for unforeseen expenses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">✅</div>
              <div className="text-muted-foreground mt-1">Feasible within ₹30,000 limit</div>
            </div>
          </div>
        </HighlightBox>
      </motion.div>
    </SlideLayout>
  );
};
