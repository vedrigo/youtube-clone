"use client";
import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, useContext } from "react";
import { AppContext } from "../../app/context";

type PropsType = {
  title: string;
  icon: React.ReactNode;
  href: LinkProps["href"];
  target?: HTMLAttributeAnchorTarget;
};

export const MiniGuideEntry = ({ href, icon, title, target }: PropsType) => {
  const {
    guide: { visible },
  } = useContext(AppContext);
  return (
    <div
      className={`flex flex-1 rounded-lg bg-black bg-opacity-0 hover:bg-opacity-5 ${
        visible && "hidden"
      }`}
    >
      <Link
        href={href}
        target={target}
        className="flex max-w-full flex-1 flex-col items-center justify-center pb-[14px] pt-4"
      >
        <div className="text-2xl">{icon}</div>

        <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[10px]">
          {title}
        </div>
      </Link>
    </div>
  );
};
