import { IconProps } from "./icon.d";

export const SuccessIcon = ({ className, onClick }: IconProps) => {
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
        d="M27.3012 6.34639C28.3603 7.15845 28.5625 8.6745 27.7531 9.7357L15.7428 25.4829C15.3193 26.0382 14.6774 26.3832 13.9817 26.4295C13.2861 26.4758 12.6044 26.2189 12.1114 25.7246L4.48838 18.0815C3.54564 17.1363 3.54564 15.6064 4.48838 14.6612C5.43464 13.7124 6.97147 13.7124 7.91773 14.6612L13.5784 20.3368L23.9033 6.79944C24.7155 5.73443 26.2382 5.5314 27.3012 6.34639Z"
        fill="white"
      />
    </svg>
  );
};
