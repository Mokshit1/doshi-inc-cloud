import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src="https://res.cloudinary.com/demo/image/upload/v1720000000/construction_hero.jpg"
          alt="Construction materials background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center py-24 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-[#FF3131]"
          >
            DOSHI INC.
          </motion.h1>
          <p className="text-lg mt-4 text-gray-600">
            Reliable materials. Trusted partnerships.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/products"
              className="bg-[#FF3131] text-white px-6 py-3 rounded-lg hover:bg-[#e62a2a] transition"
            >
              Explore Products
            </Link>
            <Link
              to="/company-profile"
              className="border border-[#FF3131] text-[#FF3131] px-6 py-3 rounded-lg hover:bg-[#FF3131] hover:text-white transition"
            >
              Company Profile
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["🏗️", "25+ Years Experience"],
            ["✅", "Quality Certified Products"],
            ["🚚", "Pan-India Supply Network"],
            ["💰", "Bulk Order Discounts"],
          ].map(([icon, text]) => (
            <div key={text} className="flex flex-col items-center">
              <div className="text-4xl mb-4">{icon}</div>
              <p className="font-medium text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Categories
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "TMT Steel Rods", img: "https://res.cloudinary.com/demo/image/upload/v1720000001/steel_rods.jpg" },
            { name: "Cement Bags", img: "https://res.cloudinary.com/demo/image/upload/v1720000002/cement_bags.jpg" },
            { name: "PVC Pipes", img: "https://res.cloudinary.com/demo/image/upload/v1720000003/pvc_pipes.jpg" },
            { name: "Bathware", img: "https://res.cloudinary.com/demo/image/upload/v1720000004/bathware.jpg" },
            { name: "AAC Blocks", img: "https://res.cloudinary.com/demo/image/upload/v1720000005/aac_blocks.jpg" },
            { name: "Tiles", img: "https://res.cloudinary.com/demo/image/upload/v1720000006/tiles.jpg" },
          ].map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.03 }}
              className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img src={cat.img} alt={cat.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex justify-between items-center">
                <p className="font-medium">{cat.name}</p>
                <Link
                  to={`/products/${cat.name.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-[#FF3131] hover:underline"
                >
                  View items →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-[#FF3131] text-white text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Looking for bulk material quotes?
        </h2>
        <p className="mb-6">Get in touch today and receive your quotation within 24 hours.</p>
        <Link
          to="/quote"
          className="bg-white text-[#FF3131] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Request a Quote
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 text-center">
        <p className="font-semibold text-lg text-white mb-2">Doshi Inc.</p>
        <p>25+ Years of Excellence in Construction Materials</p>
        <p className="mt-2">📞 +91 98765 43210  |  ✉️ info@doshiinc.com</p>
        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Doshi Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
