"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-800 mb-8 text-center italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Concept to Delivery Solution
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://picsum.photos/id/1006/600/400"
              alt="Our Brand Story"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <div className="md:w-1/2">
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We are a one-stop solution for all your apparel sourcing and supply chain needs. With a strong network of vendors globally.Our services go beyond sourcing, we provide end-to-end supply chain management, quality control solutions, and full logistics support.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
From selecting the right suppliers to ensuring top-notch product quality and smooth delivery, we handle everything so you can focus on growing your brand. Whether you’re a fashion brand, retailer, or designer, we simplify the sourcing process and ensure a hassle-free experience with reliable, efficient, and high-quality solutions.</motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
                <h3 className="text-xl font-semibold mb-2">50+</h3>
                <p className="text-sm text-gray-600">fully-vetted suppliers</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
                <h3 className="text-xl font-semibold mb-2">100%</h3>
                <p className="text-sm text-gray-600">product visibility</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[150px]">
                <h3 className="text-xl font-semibold mb-2">100%</h3>
                <p className="text-sm text-gray-600">sustainable core</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}