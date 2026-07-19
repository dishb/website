import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({ children, className, href }: ButtonProps) {
  const combinedClasses = twMerge(
    "px-6 py-2 rounded-full border border-background text-background flex gap-2 items-center ease-in-out transition-all hover:cursor-pointer hover:-translate-y-1 hover:bg-background/20",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return <button className={combinedClasses}>{children}</button>;
}
