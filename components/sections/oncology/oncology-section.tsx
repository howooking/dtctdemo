import oncologySectionImage from "@/public/sections/onocology/lungcancer.png";
import SectionImage from "../section-image";
import SectionLayout from "../section-layout";
import OncologyContents from "./oncology-contents";

export default function OnncologySection() {
  return (
    <SectionLayout hash="oncology" className="bg-olive-drab-50/80 py-10">
      <SectionImage image={oncologySectionImage} title="종양치료 클리닉" />
      <OncologyContents />
    </SectionLayout>
  );
}
