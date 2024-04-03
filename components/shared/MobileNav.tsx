"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/brand.svg"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image 
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer" 
              />
            </SheetTrigger>
            <SheetContent className="sheet-content bg-[#0D1117] sm:w-64 text-white">
              <>
                <Image 
                  src="/assets/images/brand.svg"
                  alt="logo"
                  width={152}
                  height={23}
                  className="cursor-pointer mx-auto"
                />

                <ul className="flex flex-col mt-4">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname

                    return (
                      <li 
                        className={`${isActive ? 'text-white' : 'text-gray-500'} flex whitespace-nowrap`}
                        key={link.route}
                        >
                        <Link className="sidebar-link cursor-pointer hover:bg-dark-700 rounded-md" href={link.route}>
                          <Image 
                            src={link.icon}
                            alt="logo"
                            width={24}
                            height={24}
                          />
                          {link.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover hover:brightness-150">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav