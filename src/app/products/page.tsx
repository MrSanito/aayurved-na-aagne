"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { products } from "./constants";

const categoryGradients: Record<string, string> = {
  "Personal Care": "from-rose-50 to-rose-100",
  "Ayurvedic": "from-emerald-50 to-emerald-100",
  "Wellness": "from-amber-50 to-amber-100",
  "Fragrances": "from-purple-50 to-purple-100",
  "Baby Care": "from-sky-50 to-sky-100",
  "Health Devices": "from-indigo-50 to-indigo-100",
  "Home Care": "from-blue-50 to-blue-100",
  "Food & Beverages": "from-teal-50 to-teal-100",
};

const categoryTextColors: Record<string, string> = {
  "Personal Care": "text-rose-600",
  "Ayurvedic": "text-emerald-600",
  "Wellness": "text-amber-600",
  "Fragrances": "text-purple-600",
  "Baby Care": "text-sky-600",
  "Health Devices": "text-indigo-600",
  "Home Care": "text-blue-600",
  "Food & Beverages": "text-teal-600",
};

export default function ProductsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filtered = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 font-sans pt-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">અમારી પ્રોડક્ટ્સ</h1>
              <p className="text-xs text-gray-400 font-medium">શ્રેષ્ઠ આયુર્વેદિક અને પર્સનલ કેર પ્રોડક્ટ્સ</p>
            </div>

            <div className="relative flex-1 md:max-w-md group">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
              <input
                type="text"
                placeholder="પ્રોડક્ટ શોધો..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-transparent border-2 focus:border-orange-500 focus:bg-white rounded-2xl outline-none transition-all text-sm font-medium"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-bold border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200 scale-105"
                    : "bg-white text-gray-500 border-gray-100 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Count */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-1">
        <p className="text-sm text-gray-400">
          Showing <span className="font-semibold text-gray-600">{filtered.length}</span> products
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20 pt-4">
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-bold text-gray-900">કોઈ પ્રોડક્ટ મળી નથી</h3>
            <p className="text-gray-400 text-sm">કૃપા કરીને બીજું નામ શોધો</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <div
                key={product.slug}
                onClick={() => router.push(`/products/${product.slug}`)}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Product Image Placeholder */}
                <div
                  className={`w-full aspect-square bg-gradient-to-br ${categoryGradients[product.category] ?? "from-gray-100 to-gray-200"} flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-5xl mb-1 group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${categoryTextColors[product.category] ?? "text-gray-500"} opacity-60`}>
                    {product.category}
                  </span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Product Info */}
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-2 mb-1 leading-tight h-8 sm:h-10">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm sm:text-base font-black text-gray-900">₹{product.discountedPrice}</span>
                      {product.discountPercent > 0 && (
                        <span className="text-[10px] text-gray-400 line-through">₹{product.mrp}</span>
                      )}
                    </div>
                    
                    {product.discountPercent > 0 && (
                      <span className="inline-block bg-orange-50 text-orange-600 text-[10px] font-bold px-1.5 py-0.5 rounded-md border border-orange-100">
                        {product.discountPercent}% OFF
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Quick Action Button */}
                <div className="p-2 pt-0 md:hidden">
                   <div className="w-full bg-gray-50 text-gray-900 py-2 rounded-xl text-[10px] font-bold text-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      View Details
                   </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}