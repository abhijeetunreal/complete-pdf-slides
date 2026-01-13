import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { StatCard } from "../presentation/StatCard";

interface Props {
  totalSlides: number;
}

export const ElectronicsBOMSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "component", header: "Component" },
    { key: "specification", header: "Specification" },
    { key: "qty", header: "Qty", width: "60px" },
    { key: "unitCost", header: "Unit Cost (₹)", width: "100px" },
    { key: "total", header: "Total (₹)", width: "100px" },
    { key: "source", header: "Source", width: "140px" },
  ];

  const data = [
    { component: "Motors", specification: "RS-775 DC Motor (12/24V, high speed)", qty: "4", unitCost: "800", total: "3,200", source: "Robu/Electronics Comp" },
    { component: "Wheels", specification: "100mm Rubber Wheels (Orange/Green)", qty: "4", unitCost: "400", total: "1,600", source: "Robot/DIY stores" },
    { component: "Motor Couplings", specification: "5mm to Wheel Hex/Bore", qty: "4", unitCost: "250", total: "1,000", source: "Generic" },
    { component: "Motor Drivers", specification: "BTS7960 (43A High Power H-Bridge)", qty: "4", unitCost: "600", total: "2,400", source: "Generic" },
    { component: "Linear Actuator", specification: "100mm Stroke, 12V, 750N-1000N", qty: "2", unitCost: "2,500", total: "5,000", source: "Robu/Amazon" },
    { component: "Solenoid", specification: "12V Push-Pull Solenoid (30mm stroke)", qty: "1", unitCost: "800", total: "800", source: "Generic" },
  ];

  return (
    <SlideLayout slideNumber={9} totalSlides={totalSlides}>
      <SectionBadge step="6" label="Component Sourcing & Budget" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-2"
      >
        6.1 Electronics & Drive Train
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground mb-6"
      >
        This section validates that the design is buildable within the strict budget using the specified components.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard value="₹30,000" label="Target Budget" delay={0.2} />
        <StatCard value="₹28,700" label="Estimated Cost" delay={0.3} />
        <StatCard value="₹1,300" label="Buffer" delay={0.4} />
        <StatCard value="✅" label="Feasible" delay={0.5} />
      </div>

      <DataTable columns={columns} data={data} compact />
    </SlideLayout>
  );
};
