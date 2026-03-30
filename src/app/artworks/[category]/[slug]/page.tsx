import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArtwork } from '@/lib/artworks';
import { ChevronLeft, ExternalLink, Calendar, Map } from 'lucide-react';

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const artwork = getArtwork(category, slug);

  if (!artwork) {
    notFound();
  }

  // Helper to extract Sketchfab ID
  const getSketchfabId = (url: string) => {
    const match = url.match(/sketchfab\.com\/(?:models\/|showcase\/)?([^/?#]+)/);
    return match ? match[1] : null;
  };

  const sketchfabId = artwork.link ? getSketchfabId(artwork.link) : null;

  return (
    <div className="container mx-auto px-6 py-24">
      <Link 
        href="/artworks" 
        className="inline-flex items-center space-x-2 text-zinc-500 hover:text-white mb-12 transition-colors border border-white/10 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10"
      >
        <ChevronLeft size={20} />
        <span className="text-sm font-medium">Back to Gallery</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Visual Content: 3D Viewer or Cover Image */}
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 group">
          {artwork.category === '3d' && sketchfabId ? (
            <iframe
              title={artwork.title}
              className="w-full h-full"
              src={`https://sketchfab.com/models/${sketchfabId}/embed?autostart=1&ui_theme=dark`}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
            />
          ) : (
            <img 
              src={artwork.coverUrl} 
              alt={artwork.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-10 py-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest border border-blue-500/20">
                {artwork.category}
              </span>
              <span className="flex items-center space-x-2 text-zinc-500 text-sm">
                <Calendar size={14} />
                <span>{artwork.date}</span>
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight title-gradient">
              {artwork.title}
            </h1>
            
            <p className="text-xl text-zinc-400 leading-relaxed max-w-xl">
              {artwork.description || "No description provided for this artwork."}
            </p>
          </div>

          <div className="h-px w-full bg-white/5" />

          {artwork.category === '3d' && artwork.link && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                {sketchfabId ? "Interactive 3D Preview Active" : "External Content"}
              </h3>
              <a 
                href={artwork.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors w-full sm:w-auto justify-center"
              >
                <span>View on Original Site</span>
                <ExternalLink size={18} />
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Category</span>
              <span className="text-lg font-medium text-white">{artwork.category === '2d' ? '2D Artwork' : '3D Modeling'}</span>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Status</span>
              <span className="text-lg font-medium text-white">Interactive Showcase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
