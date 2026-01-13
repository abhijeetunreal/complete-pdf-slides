import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";

interface Props {
  totalSlides: number;
}

export const FullBOMContinuedSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "component", header: "Component" },
    { key: "specification", header: "Specification" },
    { key: "qty", header: "Qty", width: "80px" },
    { key: "unit", header: "Unit (₹)", width: "100px" },
    { key: "total", header: "Total (₹)", width: "100px" },
  ];

  const data = [
    { component: "Battery (Field)", specification: "User Provided (Car Battery)", qty: "0", unit: "0", total: "0" },
    { component: "Frame Material", specification: "MS Square Tube", qty: "6m", unit: "200/m", total: "1,200" },
    { component: "Head Plates", specification: "4mm Acrylic/Aluminum", qty: "1 sheet", unit: "2,000", total: "2,000" },
    { component: "Fabrication", specification: "Welding, Cutting", qty: "-", unit: "-", total: "5,000" },
    { component: "Hardware", specification: "Bearings, Bolts (M5/M8), Nuts", qty: "Set", unit: "1,500", total: "1,500" },
  ];

  return (
    <SlideLayout slideNumber={26} totalSlides={totalSlides}>
      <SectionBadge label="BOM (Continued)" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Structural & Fabrication Costs
      </motion.h2>

      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
      >
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">TOTAL ESTIMATED COST</span>
            <p className="text-muted-foreground mt-1">Complete BOM including all components and fabrication</p>
          </div>
          <div className="text-right">
            <span className="text-5xl font-bold text-secondary">₹28,700</span>
            <p className="text-primary font-semibold mt-2">✅ Within ₹30,000 budget</p>
          </div>
        </div>
      </motion.div>
    </SlideLayout>
  );
};
