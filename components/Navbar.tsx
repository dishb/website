"use client";

import { ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import { useState, useEffect, useRef } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import contactLinks from "@/data/contactLinks";

const workLinks = [
  { label: "Arttitude", href: "/work/arttitude" },
  { label: "ARBC", href: "/work/arbc" },
  { label: "Schedul", href: "/work/schedul" },
  { label: "Crystll", href: "/work/crystll" },
  { label: "iPod", href: "/work/ipod" },
];

export default function Navbar() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);
  const [workMenuOpen, setWorkMenuOpen] = useState(false);

  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (workRef.current && !workRef.current.contains(event.target as Node)) {
        setWorkMenuOpen(false);
      }

      if (
        contactRef.current &&
        !contactRef.current.contains(event.target as Node)
      ) {
        setContactMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center py-10">
      <Link
        href="/"
        className="border border-light-gray px-6 py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
      >
        Dishant B
      </Link>

      <div className="flex gap-8">
        <Link
          href="/about"
          className="border border-light-gray px-6 py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
        >
          About
        </Link>

        <div className="relative" ref={workRef}>
          <Button
            className="border border-light-gray px-6 text-foreground py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
            onClick={() => {
              setWorkMenuOpen(!workMenuOpen);
              setContactMenuOpen(false);
            }}
          >
            Work{" "}
            <ChevronDown
              className={`${workMenuOpen ? "rotate-180" : ""} ease-in-out transition-transform size-4`}
            />
          </Button>

          {workMenuOpen && (
            <Card className="text-muted text-sm flex flex-col absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 p-2 rounded-2xl w-40">
              {workLinks.map((link) => (
                <Link
                  key={link.label}
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer hover:bg-light-gray/20 p-2 rounded-xl"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </Card>
          )}
        </div>

        <Link
          href="/about"
          className="border border-light-gray px-6 py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
        >
          Resume
        </Link>

        <div className="relative" ref={contactRef}>
          <Button
            className="border border-light-gray px-6 text-foreground py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
            onClick={() => {
              setContactMenuOpen(!contactMenuOpen);
              setWorkMenuOpen(false);
            }}
          >
            Contact{" "}
            <ChevronDown
              className={`${contactMenuOpen ? "rotate-180" : ""} ease-in-out transition-transform size-4`}
            />
          </Button>

          {contactMenuOpen && (
            <Card className="text-muted text-sm flex flex-col  absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 p-2 rounded-2xl w-40">
              {contactLinks.map((contactLink, index) => (
                <Link
                  key={index}
                  className="ease-in-out transition-all hover:text-foreground hover:cursor-pointer hover:bg-light-gray/20 p-2 rounded-xl"
                  href={contactLink.href}
                >
                  {contactLink.label}
                </Link>
              ))}
            </Card>
          )}
        </div>
      </div>
    </nav>
  );
}
