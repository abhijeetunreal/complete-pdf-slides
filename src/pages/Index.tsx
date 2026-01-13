import { useState, useEffect, useCallback, useRef } from "react";
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
import { AestheticsFormSlide1 } from "@/components/slides/AestheticsFormSlide1";
import { AestheticsFormSlide2 } from "@/components/slides/AestheticsFormSlide2";
import { FullBOMSlide } from "@/components/slides/FullBOMSlide";
import { FullBOMContinuedSlide } from "@/components/slides/FullBOMContinuedSlide";
import { PrototypingSlide } from "@/components/slides/PrototypingSlide";
import { TimelineSlide } from "@/components/slides/TimelineSlide";
import { DemoRequirementsSlide } from "@/components/slides/DemoRequirementsSlide";

const TOTAL_SLIDES = 29;

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const minSwipeDistance = 50; // Minimum distance in pixels to trigger a swipe

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

  // Touch/swipe handlers using native events for better preventDefault support
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Prevent default scrolling behavior during horizontal swipes
      if (touchStartX.current !== null && touchStartY.current !== null) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - touchStartX.current;
        const deltaY = touch.clientY - touchStartY.current;
        
        // If horizontal movement is greater than vertical, prevent default scrolling
        // This allows vertical scrolling while preventing horizontal scrolling during swipes
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) {
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }

      const touch = e.changedTouches[0];
      const deltaX = touch.clientX - touchStartX.current;
      const deltaY = touch.clientY - touchStartY.current;
      const absDeltaX = Math.abs(deltaX);
      const absDeltaY = Math.abs(deltaY);

      // Check if it's a horizontal swipe (horizontal movement > vertical movement)
      if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
        if (deltaX > 0) {
          // Swipe right - go to previous slide
          prevSlide();
        } else {
          // Swipe left - go to next slide
          nextSlide();
        }
      }

      // Reset touch start positions
      touchStartX.current = null;
      touchStartY.current = null;
    };

    // Add event listeners with passive: false for touchMove to allow preventDefault
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
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
      case 23: return <AestheticsFormSlide1 {...props} />;
      case 24: return <AestheticsFormSlide2 {...props} />;
      case 25: return <FullBOMSlide {...props} />;
      case 26: return <FullBOMContinuedSlide {...props} />;
      case 27: return <PrototypingSlide {...props} />;
      case 28: return <TimelineSlide {...props} />;
      case 29: return <DemoRequirementsSlide {...props} />;
      default: return <TitleSlide {...props} />;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-background"
    >
      <AnimatePresence mode="wait">{renderSlide()}</AnimatePresence>
    </div>
  );
};

export default Index;
