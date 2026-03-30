import Link from 'next/link';
import { getArtworks } from '@/lib/artworks';

export default function ArtworksPage() {
  const allArtworks = getArtworks();
  
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Complete Gallery</h1>
        <p className="text-zinc-400 max-w-2xl">
          An extensive collection of my work spanning 2D digital painting and 3D modeling and visualization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {allArtworks.length > 0 ? (
          allArtworks.map((art) => (
            <Link key={art.id} href={`/artworks/${art.category}/${art.slug}`} className="group relative block">
              <div className="aspect-square relative overflow-hidden rounded-xl bg-zinc-900 overflow-hidden ring-1 ring-white/5 group-hover:ring-blue-500/50 transition-all art-card">
                <img 
                  src={art.coverUrl} 
                  alt={art.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-500 mb-1">{art.category}</span>
                  <h3 className="text-lg font-bold text-white line-clamp-1 group-hover:text-blue-400 transition-colors uppercase">{art.title}</h3>
                  <p className="text-zinc-500 text-sm mt-1">{art.date}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-32 text-center bg-zinc-900/30 rounded-3xl border border-white/5">
            <p className="text-zinc-500">No artworks found. Follow the directory structure to add your work.</p>
          </div>
        )}
      </div>
    </div>
  );
}
