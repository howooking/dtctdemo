import React from "react";
import { IconType } from "react-icons/lib";

export default function Circle({
  title,
  icon: Icon,
  index,
}: {
  title: React.ReactNode;
  icon: IconType;
  index: number;
}) {
  return (
    <li
      className="absolute w-[320px] h-[320px] bg-primary/20 rounded-full top-0 left-0 flex items-center flex-col pt-24"
      style={{ left: `${index * 280}px` }}
    >
      <Icon size={80} className="text-primary" />
      <p className="pt-4 font-bold text-[21px] text-center">{title}</p>
    </li>
  );
}
