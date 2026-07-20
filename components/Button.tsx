import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  href,
  onClick,
}: ButtonProps) {
  const combinedClasses = twMerge(
    "px-6 py-2 rounded-full border border-background text-background flex gap-1 items-center ease-in-out transition-colors hover:cursor-pointer hover:bg-background/20",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
