"use client";

import logo from "../../../public/logo/logo.png";
import navIcon from "../../../public/icons/navIcon.png";
import arrowIcon from "../../../public/icons/arrowIcon.png";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "../ui/animated-button";
import { motion, useInView } from "framer-motion";

export default function Navigation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      ref={ref}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
      style={{ opacity: isInView ? 1 : 0, transition: "all 0.5s ease-in-out" }}
    >
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-between items-center py-4">
          <div className="hidden lg:block">
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>

          <div className="flex gap-6 items-center">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
                  Home
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Home Pages</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Home v1</DropdownMenuItem>
                  <DropdownMenuItem>Home v2</DropdownMenuItem>
                  <DropdownMenuItem>Home v3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <Link href="#about" className="font-semibold hover:text-primary transition-colors">
                About
              </Link>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
                  Shop
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Shop Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="#menu" className="w-full">
                      Food Menu
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Beverages</DropdownMenuItem>
                  <DropdownMenuItem>Desserts</DropdownMenuItem>
                  <DropdownMenuItem>Special Offers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
                  Blogs
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Blog Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Food Tips</DropdownMenuItem>
                  <DropdownMenuItem>Recipes</DropdownMenuItem>
                  <DropdownMenuItem>Restaurant News</DropdownMenuItem>
                  <DropdownMenuItem>Chef Stories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
                  Pages
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Other Pages</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Gallery</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#testimonials" className="w-full">
                      Testimonials
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#news" className="w-full">
                      News
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <Link href="#contact" className="font-semibold hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="relative">
              <Image src={navIcon} alt="Shopping Cart" width={20} height={20} />
              <span className="text-white font-bold bg-primary rounded-full px-1.5 py-0.5 text-xs absolute -top-2 -right-2">0</span>
            </div>
            <Link href="#contact" className="font-semibold hover:text-primary transition-colors">
              <AnimatedButton variant="gradientShift" size="lg" className="hidden lg:flex cursor-pointer">
                Contact Us
              </AnimatedButton>
              {/* <Button variant="pulse" size="lg" className="hidden lg:flex cursor-pointer">
                Contact Us
              </Button> */}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center py-4">
          <div>
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Image src={navIcon} alt="Shopping Cart" width={20} height={20} />
              <span className="text-white font-bold bg-primary rounded-full px-1.5 py-0.5 text-xs absolute -top-2 -right-2">0</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="size-6 flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-gray-600 transition-all duration-300",
                    isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                  )}
                />
                <span className={cn("block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1", isMobileMenuOpen ? "opacity-0" : "")} />
                <span
                  className={cn(
                    "block h-0.5 w-6 bg-gray-600 transition-all duration-300 mt-1",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            <div className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-semibold hover:bg-gray-50 rounded-md">
                  Home
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>Home v1</DropdownMenuItem>
                  <DropdownMenuItem>Home v2</DropdownMenuItem>
                  <DropdownMenuItem>Home v3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/about-us"
                className="block py-2 px-4 font-semibold hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-semibold hover:bg-gray-50 rounded-md">
                  Shop
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>
                    <Link href="#menu" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      Food Menu
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Beverages</DropdownMenuItem>
                  <DropdownMenuItem>Desserts</DropdownMenuItem>
                  <DropdownMenuItem>Special Offers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-semibold hover:bg-gray-50 rounded-md">
                  Blogs
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>Food Tips</DropdownMenuItem>
                  <DropdownMenuItem>Recipes</DropdownMenuItem>
                  <DropdownMenuItem>Restaurant News</DropdownMenuItem>
                  <DropdownMenuItem>Chef Stories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 px-4 text-left font-semibold hover:bg-gray-50 rounded-md">
                  Pages
                  <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuItem>Gallery</DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#testimonials" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      Testimonials
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="#news" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                      News
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="#contact"
                className="block py-2 px-4 font-semibold hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            <div className="px-4 pt-4 border-t border-gray-200">
              <Button variant="orange" size="lg" className="w-full">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
