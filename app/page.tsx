"use client"

import { useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import HeroSection from "./hero-section"
import Footer from "@/components/footer"
import About from "./about"
import PostHolder from './postHolder'
import MainEvent from "./mainEvents"

export default function Home() {
  // Add scroll offset for fixed header
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.getElementById(hash.substring(1))
        if (element) {
          // Add delay to ensure the page has fully loaded
          setTimeout(() => {
            const headerOffset = 80 // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            })
          }, 100)
        }
      }
    }

    // Handle hash on initial load
    if (window.location.hash) {
      handleHashChange()
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])
  return (
    <div className="font-sans flex flex-col min-h-screen">
        <Header />
        <HeroSection />
        <About />
        <MainEvent />
        {/* <PostHolder /> */}
        <Footer />
    </div>
  );
}
