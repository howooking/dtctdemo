import Banner from "@/components/common/banner";
import Container from "@/components/common/container";
import SubBanner from "@/components/common/sub-banner";
import vetBanner from "@/public/photo/consulting-room.jpeg";
import { Metadata } from "next";
import Tools from "./tools";
import { NAME } from "@/constants/general-info";

export const metadata: Metadata = {
  title: "보유 장비",
  description: `${NAME} 보유 장비`,
};

export default function ToolsPage() {
  return (
    <main>
      {/* <Banner
        image={vetBanner}
        upperRoute="병원 소개"
        subRoute="보유 장비"
        subMenus={INTRODUCTION_MENUS}
      /> */}

      <Container>
        <Tools />
      </Container>

      <SubBanner imageClassName="tools_subbanner" />
    </main>
  );
}
