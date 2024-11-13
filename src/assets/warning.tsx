import { IconProps } from "./icon.d";

export const WarningIcon = ({ className, onClick, size = 50 }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8696 18.5652C12.8696 20.222 14.2128 21.5652 15.8696 21.5652H16.1305C17.7874 21.5652 19.1305 20.222 19.1305 18.5652L19.1305 5.08691C19.1305 3.43006 17.7874 2.08691 16.1305 2.08691H15.8696C14.2128 2.08691 12.8696 3.43006 12.8696 5.08691V18.5652ZM16.0001 29.913C17.729 29.913 19.1305 28.5115 19.1305 26.7826C19.1305 25.0537 17.729 23.6521 16.0001 23.6521C14.2712 23.6521 12.8696 25.0537 12.8696 26.7826C12.8696 28.5115 14.2712 29.913 16.0001 29.913Z"
        fill="white"
      />
    </svg>
  );
};
