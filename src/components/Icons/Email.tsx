import { IconsProps } from ".";
const MailIcon = ({
  className,
  width = "24",
  height = " 24",
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
        d="M2.5 2.5H12.5C13.1875 2.5 13.75 3.0625 13.75 3.75V11.25C13.75 11.9375 13.1875 12.5 12.5 12.5H2.5C1.8125 12.5 1.25 11.9375 1.25 11.25V3.75C1.25 3.0625 1.8125 2.5 2.5 2.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 3.75L7.5 8.125L1.25 3.75"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default MailIcon;
