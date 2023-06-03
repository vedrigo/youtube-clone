"use client";

import { useContext } from "react";
import { AppContext } from "../../app/context";
import { mastHeadHeight } from "../masthead/consts";

export const BrowserResults = ({ children }: { children: React.ReactNode }) => {
  const {
    guide: { visible },
  } = useContext(AppContext);
  return (
    <main
      className={`mt-14 h-[calc(100vh-${mastHeadHeight})] ${
        visible ? "ml-60" : "ml-[72px]"
      }`}
    >
      <div className="">{children}</div>
    </main>
  );
};
