import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HighlightBoxProps {
  children: ReactNode;
  title?: string;
  icon?: ReactNode;
}

export const HighlightBox = ({ children, title, icon }: HighlightBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="highlight-box"
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-primary">{icon}</div>}
          {title && <h4 className="text-lg font-bold text-primary">{title}</h4>}
        </div>
      )}
      {children}
    </motion.div>
  );
};
