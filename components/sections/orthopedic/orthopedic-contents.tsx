import Container from "@/components/common/container";

import {
  LuScissors,
  LuActivity,
  LuCalendarDays,
  LuHelpingHand,
} from "react-icons/lu";
import Image from "next/image";
import ortho1 from "@/public/sections/orthopedics/1.png";
import ortho2 from "@/public/sections/orthopedics/2.png";
import ortho3 from "@/public/sections/orthopedics/3.png";
import ortho4 from "@/public/sections/orthopedics/4.png";

export default function OrthopedicContents() {
  return (
    <Container>
      <div>
        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">
          동탄시티의 정형외과클리닉은
        </h5>

        <div className="text-xl px-2 pt-1 pb-3">
          동탄시티동물의료센터에서는 많은 경험을 갖고 계신 정형외과 전공 수의사
          선생님들이 진료를 보시고, 직접 상담 및 수술을 진행하고 있습니다. Fixin
          System, Arthrex 장비 등 최신 수술 장비들의 도입으로 정확한 정형외과
          수술이 가능합니다. 우리 아이에게 가장 적합하고 좋은 수술 방법을
          제시해주는 병원을 선택해주세요. 십자인대 교정, 슬개골 탈구(재탈구
          교정, DFO, PGR), 고관절 (PennHIP, FHNO), 골절 (다리, 골반, 복합&개방
          골절) 등
        </div>

        <div className="flex justify-between gap-3 py-4">
          <div className="border rounded-lg p-4 w-full">
            <LuScissors size={24} />
            <h6 className="font-bold text-lg pt-3">고난도 정형외과 수술</h6>
            <p className="text-[#7D8266] pt-1 ">
              정형외과 전공의 수의사가 직접 수술합니다.
            </p>
          </div>
          <div className="border rounded-lg p-4 w-full">
            <LuActivity size={24} />
            <h6 className="font-bold text-lg pt-3">안전한 마취 시스템</h6>
            <p className="text-[#7D8266] pt-1">
              Our hospital is open 24/7 for emergencies and critical care. No
              appointment needed.
            </p>
          </div>
          <div className="border rounded-lg p-4 w-full">
            <LuCalendarDays size={24} />
            <h6 className="font-bold text-lg pt-3">환자 중심 수술일정</h6>
            <p className="text-[#7D8266] pt-1">
              Each patient receives a custom treatment plan tailored to their
              specific needs.
            </p>
          </div>
          <div className="border rounded-lg p-4 w-full">
            <LuHelpingHand size={24} />
            <h6 className="font-bold text-lg pt-3">수술 후 재활케어</h6>
            <p className="text-[#7D8266] pt-1">
              Our team of board-certified veterinary surgeons specializes in
              orthopedic care.
            </p>
          </div>
        </div>

        <h5 className="text-2xl font-bold px-2 pt-5 pb-3">정형외과 수술</h5>
        <div className="flex justify-between gap-5">
          <div className="relative h-[240px] w-full rounded-xl overflow-hidden ">
            <Image src={ortho1} alt="ct image" fill className="object-cover" />
            <p className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl font-bold">
              슬개골탈구
              <br />
              <span className="text-sm">재탈구 교정, DFO, PGR</span>
            </p>
            <div className="inset-0 absolute bg-black opacity-60" />
          </div>

          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho2} alt="ct image" fill className="object-cover" />
            <p className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl font-bold">
              십자인대교정
              <br />
              <span className="text-sm">TPLO, CBLO, TTA rapid, SwiveLock</span>
            </p>
            <div className="inset-0 absolute bg-black opacity-60" />
          </div>
          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho3} alt="ct image" fill className="object-cover" />
            <p className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl font-bold">
              십자인대교정
              <br />
              <span className="text-sm">PennHIP, FHNO</span>
            </p>
            <div className="inset-0 absolute bg-black opacity-60" />
          </div>

          <div className="relative h-[240px] w-full rounded-xl overflow-hidden">
            <Image src={ortho4} alt="ct image" fill className="object-cover" />
            <p className="text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-2xl font-bold">
              골절
              <br />
              <span className="text-sm">다리, 골반, 복합&개방</span>
            </p>
            <div className="inset-0 absolute bg-black opacity-60" />
          </div>
        </div>
      </div>
    </Container>
  );
}
