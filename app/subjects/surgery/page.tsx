import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import { SUBJECTS_SUBMENUS } from "@/constants/subjects";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import Categories from "../categories";

export default function SurgeryPage() {
  return (
    <main>
      <Banner
        image={vetBanner}
        upperRoute="진료 과목"
        subRoute="일반외과"
        subMenus={SUBJECTS_SUBMENUS}
      />

      <Container>
        <Categories subject="일반외과" />
      </Container>
    </main>
  );
}
