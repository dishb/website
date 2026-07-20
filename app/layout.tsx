import type { Metadata } from "next";
import { Google_Sans_Flex, Google_Sans_Code } from "next/font/google";
import Card from "@/components/Card";
import "./globals.css";
import { Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        <main className="flex flex-col gap-15">{children}</main>

        <footer className="mt-15 pb-15">
          <Card className="h-100 flex flex-col justify-end p-10 gap-2 text-muted">
            <div className="flex w-full justify-between items-center">
              <p>Copyright &copy; 2026</p>
              <p>
                Inspired by{" "}
                <Link
                  href="https://danield.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer"
                >
                  Daniel Destefanis
                </Link>
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <p className="flex items-center gap-1">
                Built with <Heart className="size-4" /> in USA
              </p>
              <div className="flex gap-2 items-center">
                <Link
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer"
                  href="https://linkedin.com/in/dishant-bhandula/"
                >
                  LinkedIn
                </Link>
                <Link
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer"
                  href="https://figma.com/@dishb"
                >
                  Figma
                </Link>
                <Link
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer"
                  href="mailto:code.dishb@gmail.com"
                >
                  Email
                </Link>
                <Link
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer"
                  href="https://github.com/dishb"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </Card>
        </footer>
      </body>
    </html>
  );
}
