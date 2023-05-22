import localFont from "next/font/local";
import { IconsType } from "./icons-type";
import "./style.css";

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../../node_modules/material-symbols/material-symbols-sharp.woff2",
  display: "block",
  weight: "100 700",
});

type PropsType = {
  fill?: boolean;
  weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700";
  icon: IconsType;
  className?: string;
};

export const MaterialIcon = ({
  fill = false,
  weight = "200",
  icon,
  className = "",
}: PropsType) => {
  const grade: number = 100; // valores padrões do Google -25 | 0 | 200
  const opticalSize: 20 | 24 | 40 | 48 = 48;
  return (
    <i
      className={`${materialSymbols.className} ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${
          fill ? 1 : 0
        }, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      }}
    >
      {icon}
    </i>
  );
};
