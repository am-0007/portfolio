import { useActiveSectionContext } from "@/components/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./type";

export function useActiveSectionHooks(sectionName : SectionName, threshold = 0.75) {
const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold
  });

  useEffect(() => {
    if(inView && ((Date.now() - timeOfLastClick) > 1000)) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return {
    ref,
  }
}