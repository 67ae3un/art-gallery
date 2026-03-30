import Link from 'next/link';
import { getArtworks } from '@/lib/artworks';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Home() {
  const allArtworks = getArtworks();
  const featuredArtworks = allArtworks.slice(0, 3); // Just show the latest 3

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-8 animate-fade-in">
            <Sparkles size={14} />
            <span>Digital Art Portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 title-gradient">
            Immersive <br /> 
            Digital Creations
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-zinc-400 mb-12 leading-relaxed">
            Exploring the boundaries of 2D illustration and 3D visualization. 
            A curated collection of digital experiences and artistic expressions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/artworks" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full transition-all hover:scale-105"
            >
              View Gallery
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-24 bg-[#0a0a0c]">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4">Latest Works</h2>
              <p className="text-zinc-500">A selection of my most recent 2D and 3D projects.</p>
            </div>
            <Link 
              href="/artworks" 
              className="group flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
            >
              <span>Explore All</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.length > 0 ? (
              featuredArtworks.map((art) => (
                <Link key={art.id} href={`/artworks/${art.category}/${art.slug}`} className="group">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-2xl glass art-card">
                    <img 
                      src={art.coverUrl} 
                      alt={art.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-xs uppercase tracking-widest text-blue-400 mb-2">{art.category}</span>
                      <h3 className="text-xl font-bold text-white">{art.title}</h3>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center border border-dashed border-white/10 rounded-2xl">
                <p className="text-zinc-500 italic">No artworks found. Add folders to public/artworks to see them here.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
