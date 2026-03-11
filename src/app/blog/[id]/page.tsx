import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogPost(props: Props) {
  const { id } = await props.params;
  const blogIndex = blogs.findIndex((b) => b.id === id);
  const blog = blogs[blogIndex];

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-32 pb-20 md:pb-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/#blogs" 
              className="inline-flex items-center gap-2 text-gray-500 hover:text-herbal transition-colors mb-8 font-medium bg-gray-50 px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> પાછા જાઓ
            </Link>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="relative w-full h-[40vh] md:h-[50vh]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-10 text-left">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold tracking-wider inline-block mb-4 border border-white/30">
                    Blog #{blogIndex + 1}
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-md pb-2" dir="ltr">
                    {blog.title}
                  </h1>
                </div>
              </div>

              <div className="p-6 md:p-10 lg:p-12 text-left bg-white relative">
                 {/* Background decoration */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-herbal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 md:block hidden pointer-events-none"></div>
                
                 <div className="prose prose-lg max-w-none text-gray-700 w-full" dir="ltr">
                    {blog.content}
                 </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
               <Link href="/#blogs" className="text-herbal font-bold flex items-center justify-center gap-2 hover:text-gold transition-colors">
                  <BookOpen size={20} /> વધુ બ્લોગ્સ વાંચો
               </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
