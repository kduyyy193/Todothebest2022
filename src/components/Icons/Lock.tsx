import { IconsProps } from ".";

const LockIcon = ({
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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.875 6.875H3.125C2.43464 6.875 1.875 7.43464 1.875 8.125V12.5C1.875 13.1904 2.43464 13.75 3.125 13.75H11.875C12.5654 13.75 13.125 13.1904 13.125 12.5V8.125C13.125 7.43464 12.5654 6.875 11.875 6.875Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.375 6.875V4.375C4.375 3.5462 4.70424 2.75134 5.29029 2.16529C5.87634 1.57924 6.6712 1.25 7.5 1.25C8.3288 1.25 9.12366 1.57924 9.70971 2.16529C10.2958 2.75134 10.625 3.5462 10.625 4.375V6.875"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LockIcon;
