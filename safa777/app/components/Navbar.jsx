"use client";
import Link from "next/link";
import safa from "../Images/safa.webp";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#53A700] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 md:px-10 py-5 flex items-center justify-between">
        <div className="text-xl font-bold text-[#f0c059c5]">
          <Link href="/">
            <Image
              src={safa}
              alt="safa777 game"
              width={150}
              height={150}
              className="w-52 h-15"
            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-[#000000c5] font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/download">Download</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#020d0f] border-t">
          <ul className="space-y-3 text-[#f0c059c5] font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
