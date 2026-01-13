import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { DataTable } from "../presentation/DataTable";
import { PriorityBadge } from "../presentation/PriorityBadge";

interface Props {
  totalSlides: number;
}

export const PrimaryRequirementsSlide = ({ totalSlides }: Props) => {
  const columns = [
    { key: "id", header: "ID", width: "60px" },
    { key: "requirement", header: "Requirement", width: "140px" },
    { key: "technical", header: "Technical Description" },
    { key: "context", header: "Training Context" },
    { key: "priority", header: "Priority", width: "80px" },
  ];

  const data = [
    {
      id: "K1",
      requirement: "Spin Variety",
      technical: "4-Axis Spin Control: Top, Back, Side, and Scramble spin",
      context: "Essential for slip catching and deceptive fielding",
      priority: <PriorityBadge priority={5} />,
    },
    {
      id: "K2",
      requirement: "Cost Constraint",
      technical: "Total BOM < ₹30,000",
      context: "Must be affordable for grassroots academies/DIY",
      priority: <PriorityBadge priority={5} />,
    },
    {
      id: "K3",
      requirement: "Variable Trajectory",
      technical: "Vertical (Pitch) and Horizontal (Yaw) automation",
      context: "Simulates catches at different heights and angles",
      priority: <PriorityBadge priority={5} />,
    },
  ];

  return (
    <SlideLayout slideNumber={2} totalSlides={totalSlides}>
      <SectionBadge step="1" label="Detailed Requirements Analysis" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-4"
      >
        Core User Requirements
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-muted-foreground text-lg mb-6"
      >
        Budget-Constrained Prototype (Rs. 30,000 INR)
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="highlight-box mb-6"
      >
        <p className="text-base">
          The requirements have been optimized for a <span className="text-secondary font-bold">Rs. 30,000 (INR)</span> budget target 
          while retaining the core functionality of spin variety and training value.
        </p>
      </motion.div>

      <h3 className="text-xl font-bold mb-4 text-primary">Primary Requirements (Weight = 5/5)</h3>
      
      <DataTable columns={columns} data={data} />
    </SlideLayout>
  );
};
