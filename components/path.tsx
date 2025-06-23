"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Box, Search, Ruler, CheckCircle, Truck } from "lucide-react";

// Update the categories array to use grey color palette
export const categories = [
  {
    name: "Design & Development",
    icon: Box,
    color: "#F5F5F5",
    image: "https://picsum.photos/id/1011/600/400",
    subtitle: "Bringing Ideas to Life",
    description:
      "From sketch to tech pack, our creative and technical teams transform concepts into production-ready designs that align with your brand’s vision.",
  },
  {
    name: "Sourcing & Procurement",
    icon: Search,
    color: "#E0E0E0",
    image: "https://picsum.photos/id/1012/600/400",
    subtitle: "Global Material Sourcing",
    description:
      "We find the best fabrics, trims, and vendors worldwide, ensuring quality, consistency, and ethical sourcing every step of the way.",
  },
  {
    name: "Sampling & Prototyping",
    icon: Ruler,
    color: "#CCCCCC",
    image: "https://picsum.photos/id/1013/600/400",
    subtitle: "Precision & Iteration",
    description:
      "We develop accurate samples for fit, finish, and design approval, refining each detail before moving into production.",
  },
  {
    name: "Production & Quality",
    icon: CheckCircle,
    color: "#BDBDBD",
    image: "https://picsum.photos/id/1014/600/400",
    subtitle: "Controlled Manufacturing",
    description:
      "Overseeing production with strict quality control protocols, we ensure excellence in every unit before it leaves the factory floor.",
  },
  {
    name: "Logistics & Delivery",
    icon: Truck,
    color: "#A9A9A9",
    image: "https://picsum.photos/id/1015/600/400",
    subtitle: "On-Time Every Time",
    description:
      "From shipping to final delivery, we manage your supply chain efficiently to ensure your products arrive on time, every time.",
  },
];

interface CategoryCarouselProps {
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function CategoryCarousel({ activeIndex, setActiveIndex }: CategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mb-8">
      <div
  ref={carouselRef}
  className="flex md:justify-between overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory md:snap-none"
>


        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className="flex-none w-1/5 snap-center"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{
              opacity: index === activeIndex ? 1 : 0.5,
              scale: index === activeIndex ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center p-2">
              <motion.button
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center"
                animate={{
                  width: index === activeIndex ? 56 : 48,
                  height: index === activeIndex ? 56 : 48,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => handleClick(index)}
              >
                <category.icon className={`${index === activeIndex ? "w-7 h-7" : "w-6 h-6"} text-gray-600`} />
              </motion.button>
              <motion.p
  className="mt-2 text-base md:text-lg font-semibold text-gray-800 text-center"
  initial={{ opacity: 0, y: 10, height: 0 }}
  animate={{
    opacity: index === activeIndex ? 1 : 0,
    y: index === activeIndex ? 0 : 10,
    height: index === activeIndex ? "auto" : 0,
  }}
  transition={{ duration: 0.3 }}
>
  {category.name}
</motion.p>


            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
