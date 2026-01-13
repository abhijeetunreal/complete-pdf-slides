import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="stat-card"
    >
      <div className="stat-value">{value}</div>
      <div className="text-muted-foreground mt-2 text-sm font-medium">{label}</div>
    </motion.div>
  );
};
