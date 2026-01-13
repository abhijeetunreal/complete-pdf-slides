import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { TitleSlide } from "@/components/slides/TitleSlide";
import { PrimaryRequirementsSlide } from "@/components/slides/PrimaryRequirementsSlide";
import { SecondaryRequirementsSlide } from "@/components/slides/SecondaryRequirementsSlide";
import { SpatialConstraintsSlide } from "@/components/slides/SpatialConstraintsSlide";
import { FunctionCarriersSlide } from "@/components/slides/FunctionCarriersSlide";
import { LaunchMechanismSlide } from "@/components/slides/LaunchMechanismSlide";
import { LaunchMechanismSlide2 } from "@/components/slides/LaunchMechanismSlide2";
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

const TOTAL_SLIDES = 27;

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
      case 7: return <LaunchMechanismSlide2 {...props} />;
      case 8: return <AimingFeedingSlide {...props} />;
      case 9: return <MorphologicalMatrixSlide {...props} />;
      case 10: return <ElectronicsBOMSlide {...props} />;
      case 11: return <ElectronicComponentsSlide {...props} />;
      case 12: return <MechanicalBOMSlide {...props} />;
      case 13: return <LaunchHeadAssemblySlide {...props} />;
      case 14: return <AimingMechanismSlide {...props} />;
      case 15: return <SolenoidFeederSlide {...props} />;
      case 16: return <ElectricalSchematicSlide {...props} />;
      case 17: return <CADVerificationSlide {...props} />;
      case 18: return <ConclusionSlide {...props} />;
      case 19: return <DetailedDesignSlide {...props} />;
      case 20: return <SpinControlLogicSlide {...props} />;
      case 21: return <AimingFeedingSubsystemSlide {...props} />;
      case 22: return <AestheticsSlide {...props} />;
      case 23: return <FullBOMSlide {...props} />;
      case 24: return <FullBOMContinuedSlide {...props} />;
      case 25: return <PrototypingSlide {...props} />;
      case 26: return <TimelineSlide {...props} />;
      case 27: return <DemoRequirementsSlide {...props} />;
      default: return <TitleSlide {...props} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background">
      <AnimatePresence mode="wait">{renderSlide()}</AnimatePresence>
    </div>
  );
};

export default Index;
