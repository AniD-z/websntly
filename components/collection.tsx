"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import CategoryCarousel, { categories } from "@/components/path"

export default function CollectionSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Detect if screen is mobile (<768px)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Auto-cycle through categories every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 relative overflow-hidden min-h-screen flex items-center transition-colors duration-500"
      style={{ backgroundColor: categories[activeIndex].color }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : isMobile ? 0 : -50 }}
            transition={{ duration: isMobile ? 0.4 : 0.8 }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              layout
            >
              <Image
                src={categories[activeIndex].image || "/placeholder.svg"}
                alt={`${categories[activeIndex].name} Category`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </motion.div>
          </motion.div>

          {/* Text + Carousel */}
          <div className="w-full md:w-1/2 px-4 md:pl-12 flex flex-col justify-between">
            <CategoryCarousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div>
              <motion.h2
                className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4 italic text-left"
                initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : isMobile ? 0 : 20 }}
                transition={{ duration: isMobile ? 0.4 : 0.8 }}
                key={`title-${activeIndex}`}
                layout
              >
                {categories[activeIndex].subtitle}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-left"
                initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : isMobile ? 0 : 20 }}
                transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0 : 0.2 }}
                key={`description-${activeIndex}`}
                layout
              >
                {categories[activeIndex].description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
