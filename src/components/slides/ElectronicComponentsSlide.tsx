import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";

interface Props {
  totalSlides: number;
}

export const ElectronicComponentsSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "component", header: "Component" },
    { key: "specification", header: "Specification" },
    { key: "qty", header: "Qty", width: "80px" },
    { key: "unitCost", header: "Unit Cost (₹)", width: "100px" },
    { key: "total", header: "Total (₹)", width: "100px" },
    { key: "source", header: "Source", width: "120px" },
  ];

  const data = [
    { component: "Microcontroller", specification: "Arduino Mega 2560 or ESP32", qty: "1", unitCost: "1,200", total: "1,200", source: "Generic" },
    { component: "Power Supply", specification: "12V 30A SMPS (or 3S LiPo Battery)", qty: "1", unitCost: "2,500", total: "2,500", source: "Generic" },
    { component: "Relays/MOSFETs", specification: "For Solenoid & Actuator control", qty: "1 set", unitCost: "1,000", total: "1,000", source: "Generic" },
    { component: "Misc Electronic", specification: "Wires, Switches, Fuse, PCB", qty: "-", unitCost: "1,500", total: "1,500", source: "Local Market" },
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
        6.1 Electronic Components
      </motion.h2>

      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-6 p-6 rounded-xl bg-card border border-border"
      >
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">Electronics Subtotal:</span>
          <span className="text-3xl font-bold text-secondary">₹20,200</span>
        </div>
      </motion.div>
    </SlideLayout>
  );
};
