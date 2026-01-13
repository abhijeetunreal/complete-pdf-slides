import { motion } from "framer-motion";

interface SectionBadgeProps {
  step?: string;
  label: string;
}

export const SectionBadge = ({ step, label }: SectionBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="section-badge"
    >
      {step && <span className="mr-2 opacity-70">STEP {step}</span>}
      {label}
    </motion.div>
  );
};
