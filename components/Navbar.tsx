"use client";

import { ChevronDown } from "lucide-react";
import Button from "@/components/Button";
import NavItem from "@/components/NavItem";
import { useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function Navbar() {
  const [contactMenuOpen, setContactMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-10">
      <NavItem text="Dishant B" href="/" />

      <div className="flex gap-8">
        <NavItem text="About" href="/about" />
        <NavItem text="Work" href="/work" />
        <NavItem text="Resume" href="/resume" />
        <div className="relative">
          <Button
            className="border border-light-gray px-6 text-foreground py-2 rounded-full hover:bg-light-gray/30 transition-colors ease-in-out"
            onClick={() => {
              setContactMenuOpen(!contactMenuOpen);
            }}
          >
            Contact{" "}
            <ChevronDown
              className={`${contactMenuOpen ? "rotate-180" : ""} ease-in-out transition-transform size-4`}
            />
          </Button>
          {contactMenuOpen ? (
            <Card className="text-muted text-sm flex flex-col gap-2 absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 p-4 rounded-2xl w-40">
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
            </Card>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
