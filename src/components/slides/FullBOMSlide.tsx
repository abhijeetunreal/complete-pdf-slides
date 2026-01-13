import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { StatCard } from "../presentation/StatCard";

interface Props {
  totalSlides: number;
}

export const FullBOMSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "sub", header: "Sub-System", width: "100px" },
    { key: "part", header: "Part Name" },
    { key: "spec", header: "Specification" },
    { key: "qty", header: "Qty", width: "60px" },
    { key: "unit", header: "Unit (₹)", width: "80px" },
    { key: "total", header: "Total (₹)", width: "90px" },
  ];

  const data = [
    { sub: "Drive Train", part: "DC Motor", spec: "RS-775 High Speed (12/24V)", qty: "4", unit: "800", total: "3,200" },
    { sub: "Launch", part: "100mm Robot Wheel", spec: "Rubber", qty: "4", unit: "400", total: "1,600" },
    { sub: "", part: "Shaft Coupler", spec: "5mm to Hex", qty: "4", unit: "250", total: "1,000" },
    { sub: "", part: "Motor Driver", spec: "BTS7960 43A H-Bridge", qty: "4", unit: "600", total: "2,400" },
    { sub: "Automation", part: "Linear Actuator", spec: "12V, 100mm Stroke, 1000N", qty: "2", unit: "2,500", total: "5,000" },
    { sub: "", part: "Solenoid", spec: "12V Push-Pull (30mm stroke)", qty: "1", unit: "800", total: "800" },
    { sub: "Controller", part: "Arduino Mega 2560", spec: "Microcontroller", qty: "1", unit: "1,200", total: "1,200" },
    { sub: "", part: "4-Channel Relay", spec: "Relay Module", qty: "1", unit: "400", total: "400" },
    { sub: "Power", part: "12V 30A SMPS", spec: "Bench testing", qty: "1", unit: "2,500", total: "2,500" },
  ];

  return (
    <SlideLayout slideNumber={25} totalSlides={totalSlides}>
      <SectionBadge label="Bill of Materials" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-4"
      >
        2. Bill of Materials (BOM) & Costing
      </motion.h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard value="₹30,000" label="Target Budget" delay={0.2} />
        <StatCard value="₹28,700" label="Optimized Prototype Cost" delay={0.3} />
      </div>

      <DataTable columns={columns} data={data} compact />
    </SlideLayout>
  );
};
