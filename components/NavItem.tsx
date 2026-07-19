import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
}

export default function NavItem({ text, href }: NavItemProps) {
  return (
    <Link
      href={href}
      className="border border-light-gray px-6 py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
    >
      {text}
    </Link>
  );
}
