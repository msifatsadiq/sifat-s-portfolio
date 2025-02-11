import GrainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800  rounded-3xl p-6 mt-1 relative overflow-hidden z-0 after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${GrainImage})` }}
        aria-hidden="true"
      ></div>
      {children}
    </div>
  );
};
