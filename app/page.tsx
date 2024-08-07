import BiliarySection from "@/components/sections/biliary/biliary-section";
import CTSection from "@/components/sections/ct/ct-section";
import DialysisSection from "@/components/sections/dialysis/dialysis-section";
import EmploymentSection from "@/components/sections/employment/employment-section";
import FacilitiesSection from "@/components/sections/facilities/facilities-section";
import InfoSection from "@/components/sections/info/info-section";
import IntroSection from "@/components/sections/intro/intro-section";
import LandingSection from "@/components/sections/landing/landing-section";
import MapSection from "@/components/sections/map/map-section";
import OnncologySection from "@/components/sections/oncology/oncology-section";
import OrthopedicSection from "@/components/sections/orthopedic/orthopedic-section";
import ToolsSection from "@/components/sections/tools/tools-section";
import VetSection from "@/components/sections/vets/vet-section";
import Building from "./building";

export default function Home() {
  return (
    <>
      {/* <Building /> */}
      <LandingSection />
      <IntroSection />
      <VetSection />
      <OrthopedicSection />
      <BiliarySection />
      <DialysisSection />
      <OnncologySection />
      <CTSection />
      <ToolsSection />
      <MapSection />
      <InfoSection />
      <EmploymentSection />
    </>
  );
}
