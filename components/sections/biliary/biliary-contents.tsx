import Container from "@/components/common/container";
import bilImage1 from "@/public/sections/biliary/1.png";
import bilImage2 from "@/public/sections/biliary/2.png";
import bilImage3 from "@/public/sections/biliary/3.png";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function BiliaryContents() {
  return (
    <Container>
      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          동탄시티 간담도계 클리닉은
        </h5>
        <p className="px-2 pb-3 pt-1 text-xl">
          간, 담도 수술은 수술뿐만 아니라, 수술 후 중환자 관리도 중요하기 때문에
          외과와 내과의 협진이 매우 중요합니다. 동탄시티동물의료센터에서는 최신
          수술 장비의 도입으로 간담도 수술에서 출혈 및 부작용을 최소화 하였으며,
          수술 후 협진 시스템을 통해 수술 후 관리에도 최선을 다하고 있습니다.
        </p>
      </div>

      <div className="flex justify-between gap-4 py-4">
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={bilImage1} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={bilImage2} alt="ct image" fill className="object-cover" />
        </div>
        <div className="relative h-[240px] w-full overflow-hidden rounded-xl">
          <Image src={bilImage3} alt="ct image" fill className="object-cover" />
        </div>
      </div>

      <div>
        <h5 className="px-2 pb-3 pt-5 text-2xl font-bold">
          간담도계 전문 수술
        </h5>

        <ul className="flex gap-4 px-2 pb-3 pt-1">
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />간 종양
          </li>
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />간 생검
          </li>

          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />
            PSS
          </li>
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />
            담낭 파열
          </li>
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />
            담낭 점액종
          </li>
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />
            담석
          </li>
          <li className="flex items-center gap-1 rounded-lg bg-white py-2 pl-3 pr-4 shadow">
            <CheckIcon className="h-6 w-6" />
            담관 종양
          </li>
        </ul>
      </div>
    </Container>
  );
}
