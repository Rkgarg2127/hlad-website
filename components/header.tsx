"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ChevronDown, Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            {/* Updated logo */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image src="/images/hlad-logo.png" alt="HLAD Logo" fill className="object-contain" sizes="48px" />
            </div>
            <div>
              <span className="text-2xl sm:text-2xl font-bold text-space-cadet">HLAD</span>
              {/*<span className="text-xs font-medium text-muted-foreground block md:inline md:ml-1">LIMITED</span>*/}
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                  <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md relative overflow-hidden"
                          href="/#products"
                          onClick={(e) => {
                            e.preventDefault()
                            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                          }}
                        >
                          <div className="absolute inset-0">
                            <Image
                              src="/images/stock-photo.jpg"
                              alt="Stock photo"
                              fill
                              className="object-cover"
                              sizes="100vw"
                              style={{ objectPosition: "center" }}
                            />
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-green-blue/66"></div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                            </div>
                          </div>
                          <div className="relative z-10 mt-4 mb-2 text-lg font-medium text-white">
                            HLAD 
                          </div>
                          <p className="relative z-10 text-sm leading-tight text-white/90">
                            Explore our premium aquaculture solutions trusted by importers across 5 continents.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-jordy-blue/20 focus:bg-jordy-blue/20"
                          href="/products/raw-frozen-shrimp"
                        >
                          <div className="text-sm font-medium leading-none">Raw Frozen Shrimp</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Farm-raised, processed at BAP 4-star certified facility
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-jordy-blue/20 focus:bg-jordy-blue/20"
                          href="/products/cooked-shrimp"
                        >
                          <div className="text-sm font-medium leading-none">Cooked Shrimp</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Ready-to-serve shrimp for retail and foodservice
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-jordy-blue/20 focus:bg-jordy-blue/20"
                          href="/products/value-added-shrimp"
                        >
                          <div className="text-sm font-medium leading-none">Value-Added Shrimp</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Breaded, cooked, marinated formats for retail and foodservice
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#divisions"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("divisions")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Divisions
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#sustainability"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("sustainability")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Sustainability & Responsibility
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a
                  href="#about"
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  About
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex gap-4">
            <Button className="bg-black hover:bg-black/70" asChild>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Connect With Team
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/images/hlad-logo.png" alt="HLAD Logo" fill className="object-contain" sizes="40px" />
              </div>
              <div>
                <span className="text-lg font-bold text-space-cadet">HLAD</span>
                <span className="text-xs font-medium text-muted-foreground block">Hindi Literatue And Debating, NITKKR</span>
              </div>
            </div>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              <div className="flex flex-col">
                <button
                  className="flex items-center justify-between text-lg font-medium mb-2"
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                >
                  Products
                  <ChevronDown
                    className={`h-4 w-4 ml-1 transition-transform ${isMobileProductsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`pl-4 flex flex-col gap-2 ${isMobileProductsOpen ? "block" : "hidden"}`}>
                  <Link href="/products/raw-frozen-shrimp" className="text-base" onClick={() => setIsOpen(false)}>
                    Raw Frozen Shrimp
                  </Link>
                  <Link href="/products/cooked-shrimp" className="text-base" onClick={() => setIsOpen(false)}>
                    Cooked Shrimp
                  </Link>
                  <Link href="/products/value-added-shrimp" className="text-base" onClick={() => setIsOpen(false)}>
                    Value-Added Shrimp
                  </Link>
                </div>
              </div>

              <a
                href="#divisions"
                className="text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("divisions")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Divisions
              </a>
              <a
                href="#sustainability"
                className="text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("sustainability")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                Sustainability & Responsibility
              </a>
              <a
                href="#about"
                className="text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
              >
                About
              </a>
              <div className="flex flex-col gap-2 mt-4">
                <Button className="bg-green-blue" asChild>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                      setIsOpen(false)
                    }}
                  >
                    Connect With Export Team
                  </a>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
