import Image, { type StaticImageData } from "next/image";
import Container from "../common/container";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function ExpertSection({
  text,
  points,
  image,
  reverse,
}: {
  title: string;
  text: React.ReactNode;
  points: string[];
  image: StaticImageData;
  reverse?: boolean;
}) {
  return (
    <Container>
      <div className="relative">
        <div className={cn("flex items-end", reverse && "flex-row-reverse")}>
          <div className="w-3/5 z-20">
            <div className="text-2xl leading-[44px]">{text}</div>

            <ul className="mt-10">
              {points.map((point, index) => (
                <li
                  key={point}
                  className={cn(
                    `bg-olive-drab-${(index + 5) * 100}`,
                    "text-xl  px-2 rounded-full text-white mb-3 flex gap-2 items-center py-2"
                  )}
                >
                  <div className="bg-white text-primary flex items-center justify-center rounded-full w-8 h-8">
                    <CheckIcon className="w-8 h-8" />
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "w-[600px] h-[600px] overflow-hidden rounded-full flex-shrink-0 absolute z-10",
              reverse ? "left-0" : "right-0"
            )}
          >
            <Image
              fill
              alt="정형외과 이미지"
              src={image}
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
