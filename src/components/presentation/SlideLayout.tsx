import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  totalSlides: number;
}

export const SlideLayout = ({ children, slideNumber, totalSlides }: SlideLayoutProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="slide-container flex flex-col h-screen"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 bg-primary blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 bg-secondary blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5 bg-primary blur-3xl" />
      </div>

      {/* Content */}
      <div className="flex-1 relative z-10 p-6 md:p-10 lg:p-14 overflow-y-auto min-h-0">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between border-t border-border/50 flex-shrink-0">
        <span className="text-sm text-muted-foreground font-medium">
          Cricket Fielding Training Device (CFTD)
        </span>
        <span className="text-sm font-mono text-primary">
          {String(slideNumber).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  );
};
