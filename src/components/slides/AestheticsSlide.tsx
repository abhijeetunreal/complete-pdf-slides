import { motion } from "framer-motion";
import { SlideLayout } from "../presentation/SlideLayout";
import { SectionBadge } from "../presentation/SectionBadge";
import { BulletList } from "../presentation/BulletList";
import { HighlightBox } from "../presentation/HighlightBox";
import { Palette, Box } from "lucide-react";

interface Props {
  totalSlides: number;
}

export const AestheticsSlide = ({ totalSlides }: Props) => {
  const formPoints = [
    <><strong className="text-secondary">Visual Weight:</strong> The "X" head is the focal point, designed with an open frame to show the mechanics (signifying "Performance")</>,
    <><strong className="text-secondary">Stance:</strong> A wide, welded rectangular base ensures stability against recoil</>,
  ];

  const cmfgPoints = [
    <><strong className="text-secondary">Primary Color:</strong> Matte Black (Powder-coated mild steel) – Chosen to hide field dirt and reduce glare for the batter/fielder</>,
    <><strong className="text-secondary">Accent Color:</strong> Safety Orange or Neon Green (Wheel hubs and Pivot points) – Highlights the moving parts for safety and visual tracking</>,
  ];

  const materialsPoints = [
    <><strong className="text-secondary">Frame:</strong> 25x25mm Mild Steel Square Tubing</>,
    <><strong className="text-secondary">Plates:</strong> 4mm Aluminum or Acrylic (Laser cut)</>,
    <><strong className="text-secondary">Guard:</strong> Black plastic mesh (Chicken wire alternative) zip-tied to the frame</>,
  ];

  const graphicsPoints = [
    <><strong className="text-accent">Warning:</strong> "KEEP HANDS CLEAR" (Yellow/Black ISO standard label)</>,
    <><strong className="text-secondary">Interface:</strong> Simple toggle switches labeled "Power," "Spin Mode," and "Fire"</>,
  ];

  return (
    <SlideLayout slideNumber={21} totalSlides={totalSlides}>
      <SectionBadge label="Aesthetics & Form" />
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="slide-title text-3xl md:text-4xl mt-6 mb-6"
      >
        1.3 Detailed Aesthetics, Form, and Semiotics (CMFG)
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        <HighlightBox title="Form Factor" icon={<Box className="w-5 h-5" />}>
          <BulletList items={formPoints} />
        </HighlightBox>

        <HighlightBox title="CMFG (Color, Material, Finish, Graphics)" icon={<Palette className="w-5 h-5" />}>
          <BulletList items={cmfgPoints} />
        </HighlightBox>

        <HighlightBox title="Materials">
          <BulletList items={materialsPoints} />
        </HighlightBox>

        <HighlightBox title="Graphics & Interface">
          <BulletList items={graphicsPoints} />
        </HighlightBox>
      </div>
    </SlideLayout>
  );
};
