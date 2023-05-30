import { SvgIconsEnum, svgIcons } from "./icons";

type PropsType = {
  className?: string;
  color?: string;
  icon: keyof typeof SvgIconsEnum;
  fill?: boolean;
};

export const SvgIcon = ({ className, icon, color, fill }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      style={{
        display: "block",
        minWidth: "14px",
        pointerEvents: "none",
      }}
      className={className}
    >
      <g height="24" viewBox="0 0 24 24" width="24">
        <path fill={color} d={svgIcons[icon][fill ? "d_fill" : "d"]}></path>
      </g>
    </svg>
  );
};
