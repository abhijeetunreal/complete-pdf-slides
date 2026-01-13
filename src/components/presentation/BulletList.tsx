import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BulletListProps {
  items: (string | ReactNode)[];
  delay?: number;
}

export const BulletList = ({ items, delay = 0.3 }: BulletListProps) => {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: delay + index * 0.1 }}
          className="bullet-point"
        >
          <span>{item}</span>
        </motion.div>
      ))}
    </div>
  );
};
