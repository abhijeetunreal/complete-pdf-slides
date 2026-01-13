import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  description?: string;
  aspectRatio?: "square" | "video" | "wide" | "tall";
  src?: string;
  alt?: string;
  className?: string;
}

export const ImagePlaceholder = ({ 
  label, 
  description, 
  aspectRatio = "video",
  src,
  alt,
  className = ""
}: ImagePlaceholderProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`image-placeholder ${src ? 'w-full max-h-full overflow-hidden' : aspectClasses[aspectRatio]} ${src ? '' : 'flex-col gap-3'} flex items-center justify-center ${className}`}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt || label}
          className="w-full h-auto max-h-[calc(100vh-300px)] object-contain"
        />
      ) : (
        <>
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-primary" />
          </div>
          <span className="text-primary font-semibold text-center px-4">{label}</span>
          {description && (
            <span className="text-muted-foreground text-sm text-center px-4">{description}</span>
          )}
        </>
      )}
    </motion.div>
  );
};
