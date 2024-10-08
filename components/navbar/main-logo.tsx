import mainLogo from "@/public/main-logo.png";
import Image from "next/image";
import Link from "next/link";

export default function MainLogo() {
  return (
    <Link href="/#home" className="flex items-center gap-2 xl:items-end">
      <Image
        alt="logo"
        src={mainLogo}
        className="h-8 w-auto xl:h-14"
        priority
        unoptimized
      />

      <div className="flex flex-col gap-2 text-white">
        <p className="text-base font-bold xl:text-[30px] xl:leading-7">
          24시
          <span className="text-olive-drab-500">동탄</span>
          시티 동물의료센터
        </p>
        <p className="hidden text-xs tracking-[0.03em] xl:block xl:text-[20px]">
          Dongtan City Animal Medical Center
        </p>
      </div>
    </Link>
  );
}
