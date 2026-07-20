import { twMerge } from "tailwind-merge";

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "border border-light-gray w-full rounded-5xl bg-background",
        className,
      )}
    >
      {children}
    </div>
  );
}
