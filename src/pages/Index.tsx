import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { PrimaryRequirementsSlide } from "@/components/slides/PrimaryRequirementsSlide";
import { SecondaryRequirementsSlide } from "@/components/slides/SecondaryRequirementsSlide";
import { SpatialConstraintsSlide } from "@/components/slides/SpatialConstraintsSlide";
import { FunctionCarriersSlide } from "@/components/slides/FunctionCarriersSlide";
import { LaunchMechanismSlide } from "@/components/slides/LaunchMechanismSlide";
import { AimingFeedingSlide } from "@/components/slides/AimingFeedingSlide";
import { MorphologicalMatrixSlide } from "@/components/slides/MorphologicalMatrixSlide";
import { ElectronicsBOMSlide } from "@/components/slides/ElectronicsBOMSlide";
import { ElectronicComponentsSlide } from "@/components/slides/ElectronicComponentsSlide";
import { MechanicalBOMSlide } from "@/components/slides/MechanicalBOMSlide";
import { LaunchHeadAssemblySlide } from "@/components/slides/LaunchHeadAssemblySlide";
import { AimingMechanismSlide } from "@/components/slides/AimingMechanismSlide";
import { SolenoidFeederSlide } from "@/components/slides/SolenoidFeederSlide";
import { ElectricalSchematicSlide } from "@/components/slides/ElectricalSchematicSlide";
import { CADVerificationSlide } from "@/components/slides/CADVerificationSlide";
import { ConclusionSlide } from "@/components/slides/ConclusionSlide";
import { DetailedDesignSlide } from "@/components/slides/DetailedDesignSlide";
import { SpinControlLogicSlide } from "@/components/slides/SpinControlLogicSlide";
import { AimingFeedingSubsystemSlide } from "@/components/slides/AimingFeedingSubsystemSlide";
import { AestheticsSlide } from "@/components/slides/AestheticsSlide";
import { FullBOMSlide } from "@/components/slides/FullBOMSlide";
import { FullBOMContinuedSlide } from "@/components/slides/FullBOMContinuedSlide";
import { PrototypingSlide } from "@/components/slides/PrototypingSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { DemoRequirementsSlide } from "@/components/slides/DemoRequirementsSlide";

const TOTAL_SLIDES = 26;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToSlide = useCallback((slide: number) => {
    if (slide >= 1 && slide <= TOTAL_SLIDES) setCurrentSlide(slide);
  }, []);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const renderSlide = () => {
    const props = { totalSlides: TOTAL_SLIDES };
    switch (currentSlide) {
      case 1: return <TitleSlide {...props} />;
      case 2: return <PrimaryRequirementsSlide {...props} />;
      case 3: return <SecondaryRequirementsSlide {...props} />;
      case 4: return <SpatialConstraintsSlide {...props} />;
      case 5: return <FunctionCarriersSlide {...props} />;
      case 6: return <LaunchMechanismSlide {...props} />;
      case 7: return <AimingFeedingSlide {...props} />;
      case 8: return <MorphologicalMatrixSlide {...props} />;
      case 9: return <ElectronicsBOMSlide {...props} />;
      case 10: return <ElectronicComponentsSlide {...props} />;
      case 11: return <MechanicalBOMSlide {...props} />;
      case 12: return <LaunchHeadAssemblySlide {...props} />;
      case 13: return <AimingMechanismSlide {...props} />;
      case 14: return <SolenoidFeederSlide {...props} />;
      case 15: return <ElectricalSchematicSlide {...props} />;
      case 16: return <CADVerificationSlide {...props} />;
      case 17: return <ConclusionSlide {...props} />;
      case 18: return <DetailedDesignSlide {...props} />;
      case 19: return <SpinControlLogicSlide {...props} />;
      case 20: return <AimingFeedingSubsystemSlide {...props} />;
      case 21: return <AestheticsSlide {...props} />;
      case 22: return <FullBOMSlide {...props} />;
      case 23: return <FullBOMContinuedSlide {...props} />;
      case 24: return <PrototypingSlide {...props} />;
      case 25: return <TimelineSlide {...props} />;
      case 26: return <DemoRequirementsSlide {...props} />;
      default: return <TitleSlide {...props} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">{renderSlide()}</AnimatePresence>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <button onClick={prevSlide} disabled={currentSlide === 1} className="p-3 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-30 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-1.5">
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <button key={i} onClick={() => goToSlide(i + 1)} className={`nav-dot ${currentSlide === i + 1 ? "active" : ""}`} />
          ))}
        </div>
        <button onClick={nextSlide} disabled={currentSlide === TOTAL_SLIDES} className="p-3 rounded-full bg-card border border-border hover:bg-muted disabled:opacity-30 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
