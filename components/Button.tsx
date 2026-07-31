import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  dark?: boolean;
}

export default function Button({
  children,
  className,
  href,
  onClick,
  dark,
}: ButtonProps) {
  const colorClasses = dark
    ? "border-foreground text-foreground hover:bg-foreground/10"
    : "border-background text-background hover:bg-background/10";

  const combinedClasses = twMerge(
    "px-6 py-2 rounded-full border flex gap-1 items-center ease-in-out transition-all hover:cursor-pointer",
    colorClasses,
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
