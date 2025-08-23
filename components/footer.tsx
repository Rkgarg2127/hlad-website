"use client"

import Image from "next/image"
import { Linkedin, Facebook, Instagram } from "lucide-react"
import {LinkedinUrl, InstagramUrl, FacebookUrl } from "@/data/generalData"

const footerLinks=[
    {
        title: "About Us",
        url: "#about"
    },
    {
        title: "Products",
        url: "#products"
    },
    {
        title: "Divisions",
        url: "#divisions"
    },
    {
        title: "Contact",
        url: "#contact"
    }
]

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-12 pb-4"> 
      <div className="container px-4 md:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          
          <div>
            <div className="flex items-center  gap-4 mb-4">
              {/* Updated logo */}
              <div className="relative w-15 h-15">
                <Image src="/images/hlad-logo.png" alt="HLAD Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-3xl font-bold"> HLAD </p>
                <p className="text-jordy-blue ">Hindi Literature And Debating Club, NITKKR</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">

              <a
                href={LinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cornflower-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href={FacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cornflower-blue transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={InstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cornflower-blue transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>

            <nav className="flex flex-wrap gap-4 md:justify-end">
                {footerLinks.map((footerLink, index) => {
                     return <a
                        key={index}
                        href={footerLink.url}
                        className="hover:text-blue-700 transition-colors"
                    >
                        {footerLink.title}
                    </a>
                })}

            </nav>
          </div>
        </div>

        <div className="mt-8 pt-2 border-t border-green-blue/30 text-center text-sm text-jordy-blue">
          &copy; {new Date().getFullYear()} HLAD. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
