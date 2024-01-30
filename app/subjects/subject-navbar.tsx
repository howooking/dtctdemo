import { Button } from "@/components/ui/button";
import { TOOLS } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

export default function SubjectNavbar({
  category,
  setCategory,
  categories,
  subjectRoute,
}: {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categories: {
    categoryName: string;
    image: StaticImageData;
    intro: string;
    description: string;
    tags: string[];
  }[];
  subjectRoute: string;
}) {
  return (
    <div>
      <ul className="flex gap-4">
        {categories.map((el) => (
          <li key={el.categoryName}>
            <Link href={`/subjects${subjectRoute}/#${el.categoryName}`}>
              <Button
                onClick={() => setCategory(el.categoryName)}
                className={cn(
                  category === el.categoryName
                    ? "bg-olive-drab-600 text-white"
                    : "bg-olive-drab-100 text-olive-drab-700 hover:bg-olive-drab-100/80",
                  " px-4 py-2 rounded-full font-bold"
                )}
              >
                {el.categoryName}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
