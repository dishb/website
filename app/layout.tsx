import type { Metadata } from "next";
import { Google_Sans_Flex, Google_Sans_Code } from "next/font/google";
import NavItem from "@/components/NavItem";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "dishant b",
  description: "Dishant's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${googleSansCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-20">
        <nav className="flex justify-between items-center py-10">
          <NavItem text="Dishant B" href="/" />

          <div className="flex gap-8">
            <NavItem text="About" href="/about" />
            <NavItem text="Work" href="/work" />
            <NavItem text="Resume" href="/resume" />
            <NavItem text="Contact" href="/contact" />
          </div>
        </nav>
        <main className="flex flex-col gap-15">{children}</main>

        <footer className="py-10"></footer>
      </body>
    </html>
  );
}
