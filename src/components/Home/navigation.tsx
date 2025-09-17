import logo from "../../../public/logo/logo.png";
import navIcon from "../../../public/icons/navIcon.png";
import menuIcon from "../../../public/icons/menuIcon.png";
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

export default function Navigation() {
  return (
    <div className="hidden md:flex justify-between items-center max-w-[1500px] mx-auto py-4 px-4">
      <div className="hidden lg:block">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold">
              Home
              <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Link href="/about-us" className="font-semibold">About Us</Link>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold">
              Shop
              <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold">
              Blogs
              <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-semibold">
              Pages
              <Image src={arrowIcon} alt="arrowIcon" width={10} height={10} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Link href="/contact-us" className="font-semibold">Contact Us</Link>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="relative">
          <Image src={navIcon} alt="navIcon" width={20} height={10} />
          <span className="text-white font-bold bg-black rounded-full px-1 absolute top-[-13px] right-[-14px] ">0</span>
        </div>
        <Button variant="orange" size="lg">
          Contact Us
        </Button>
        <Image src={menuIcon} alt="menuIcon" width={20} height={10} />
      </div>
    </div>
  );
}
