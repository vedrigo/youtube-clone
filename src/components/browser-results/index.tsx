"use client";

import { useContext } from "react";
import { AppContext } from "../../app/context";

export const BrowserResults = ({ children }: { children: React.ReactNode }) => {
  const {
    guide: { visible },
  } = useContext(AppContext);
  return (
    <div className={`mt-14 ${visible ? "ml-60" : "ml-[72px]"}`}>{children}</div>
  );
};
