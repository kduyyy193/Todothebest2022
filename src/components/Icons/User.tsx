import { IconsProps } from ".";

const UserIcon = ({
  className,
  width = "24",
  height = "24",
  color = "#000",
}: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="black"
      stroke-width="30"
    >
      <circle cx="300" cy="300" r="265" />
      <circle cx="300" cy="230" r="115" />
      <path
        d="M106.81863443903,481.4 a205,205 1 0,1 386.36273112194,0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
