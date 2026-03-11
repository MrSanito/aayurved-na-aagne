import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-herbal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div>
            <h2 className="text-sm font-bold text-gold tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
              <BookOpen size={18} />
              બ્લોગ્સ અને માહિતી
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              સ્વાસ્થ્ય જ્ઞાન અને માર્ગદર્શન
            </h3>
            <div className="w-24 h-1.5 bg-herbal mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg">
              સાચું આયુર્વેદ અને વજન ઘટાડવાની સાચી પદ્ધતિઓ વિશે જાણો અને તમારું જ્ઞાન વધારો.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog, idx) => (
            <div key={blog.id} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-all hover:shadow-2xl flex flex-col">
              <div className="relative h-56 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-bold text-herbal shadow-sm">
                  Blog #{idx + 1}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col grow text-left" dir="ltr">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 line-clamp-2" dir="ltr">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href={`/blog/${blog.id}`} className="inline-flex items-center gap-2 text-herbal font-bold hover:text-gold transition-colors">
                      વધુ વાંચો <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
