import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { PriorityBadge } from "../presentation/PriorityBadge";
import { BulletList } from "../presentation/BulletList";

interface Props {
  totalSlides: number;
}

export const SecondaryRequirementsSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "id", header: "ID", width: "60px" },
    { key: "requirement", header: "Requirement", width: "160px" },
    { key: "technical", header: "Technical Description" },
    { key: "context", header: "Training Context" },
    { key: "priority", header: "Priority", width: "80px" },
  ];

  const data = [
    {
      id: "K4",
      requirement: "Launch Velocity",
      technical: "80-100 km/h (Derated for cost)",
      context: "Sufficient for inner-ring fielding (30-40m)",
      priority: <PriorityBadge priority={3} />,
    },
    {
      id: "K5",
      requirement: "Feeding Automation",
      technical: "Automatic ball feeding (Solenoid)",
      context: "Allows solo practice without a coach feeding",
      priority: <PriorityBadge priority={3} />,
    },
    {
      id: "K6",
      requirement: "Portability",
      technical: "Lightweight frame (<15 kg), battery operated",
      context: "Easy to move by one person",
      priority: <PriorityBadge priority={3} />,
    },
  ];

  const specs = [
    <><strong className="text-secondary">Launch Mechanism:</strong> 4-Wheel X-Configuration (Allows complex spin mixing)</>,
    <><strong className="text-secondary">Motors:</strong> High-RPM brushed DC (775 Series)</>,
    <><strong className="text-secondary">Pitch (Vertical):</strong> 0° to 45° via 100mm Linear Actuator</>,
    <><strong className="text-secondary">Yaw (Horizontal):</strong> ±30° sweep via 100mm Linear Actuator (Crank mechanism)</>,
    <><strong className="text-secondary">Power Source:</strong> 12V/24V DC (Li-Ion or Lead Acid)</>,
  ];

  return (
    <SlideLayout slideNumber={3} totalSlides={totalSlides}>
      <SectionBadge step="1" label="Requirements Analysis (Continued)" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        Secondary Requirements & Specifications
      </motion.h2>

      <h3 className="text-xl font-bold mb-4 text-primary">Secondary Requirements (Weight = 3/5)</h3>
      
      <DataTable columns={columns} data={data} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="text-xl font-bold mb-4 text-primary">1.2 Geometric & Kinematic Specifications (Prototype)</h3>
        <BulletList items={specs} />
      </motion.div>
    </SlideLayout>
  );
};
