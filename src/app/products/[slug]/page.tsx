"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { FaWhatsapp, FaArrowLeft, FaShareAlt, FaShieldAlt, FaLeaf, FaTruck } from "react-icons/fa";
import { products } from "../constants";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <button
            onClick={() => router.push("/products")}
            className="text-orange-500 font-bold hover:underline"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

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

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition-colors font-medium"
          >
            <FaArrowLeft /> Back to Shop
          </button>
          <button className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-orange-500 transition-all">
            <FaShareAlt />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Product Image/Emoji */}
          <div className="relative group">
            <div className={`aspect-square rounded-[2rem] bg-gradient-to-br ${categoryGradients[product.category] ?? "from-gray-50 to-gray-100"} flex items-center justify-center overflow-hidden shadow-sm border border-gray-100`}>
              <span className="text-[10rem] sm:text-[12rem] group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl">
                {product.emoji}
              </span>
            </div>
            
            {/* Feature Badges */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <FaLeaf className="mx-auto text-emerald-500 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">100% Pure</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <FaShieldAlt className="mx-auto text-blue-500 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Certified</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl text-center border border-gray-100">
                <FaTruck className="mx-auto text-orange-500 mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="flex items-end gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 font-medium mb-1">Price</span>
                <span className="text-5xl font-black text-gray-900">₹{product.discountedPrice}</span>
              </div>
              {product.discountPercent > 0 && (
                <div className="flex flex-col pb-1">
                   <span className="text-lg text-gray-400 line-through font-medium">₹{product.mrp}</span>
                   <span className="text-emerald-500 font-bold text-sm">{product.discountPercent}% OFF</span>
                </div>
              )}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              અમારા આ શુદ્ધ આયુર્વેદિક {product.name} દ્વારા તમને શ્રેષ્ઠ પરિણામ મળશે. 
              આ પ્રોડક્ટ કોઈ પણ પ્રકારની આડઅસર વગર તમારા સ્વાસ્થ્ય માટે ફાયદાકારક છે.
            </p>

            <div className="pt-8 space-y-4">
              <a
                href={product.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 w-full bg-emerald-500 hover:bg-emerald-600 text-white py-6 rounded-2xl text-xl font-bold transition-all shadow-xl shadow-emerald-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FaWhatsapp size={28} />
                WhatsApp દ્વારા ઓર્ડર કરો
              </a>
              <p className="text-center text-gray-400 text-sm font-medium">
                ક્લિક કરતા જ તમે સીધા WhatsApp પર જોડાઈ જશો
              </p>
            </div>

            {/* Info Accordion Placeholder */}
            <div className="border-t border-gray-100 pt-8 mt-12 space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <FaLeaf />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">કુદરતી ઉપચાર</h4>
                    <p className="text-sm text-gray-500">શુદ્ધ વનસ્પતિ અને આયુર્વેદિક જ્ઞાનથી તૈયાર કરવામાં આવ્યું છે.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ગુણવત્તાની ખાતરી</h4>
                    <p className="text-sm text-gray-500">દરેક પ્રોડક્ટ લેબોરેટરી ટેસ્ટેડ અને સુરક્ષિત છે.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
