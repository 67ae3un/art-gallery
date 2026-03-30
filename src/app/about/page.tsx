import { Mail, Globe, Share2, Users, ExternalLink } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Author Portrait/Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group bg-zinc-900 border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">Portfolio Artist</h1>
            <p className="text-lg text-zinc-400">Digital Creator & Visionary</p>
          </div>
        </div>

        {/* About Bio */}
        <div className="flex flex-col space-y-12">
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500">Artist Profile</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight title-gradient">
              Blending Art and <br /> Future Technology.
            </h3>
            <p className="text-xl text-zinc-400 leading-relaxed">
              I specialize in creating visually striking digital masterpieces that bridge the gap between imagination and reality. 
              My journey started with 2D digital painting, which evolved into a deep passion for 3D modeling and immersive visualization. 
              I strive for perfection in every pixel and polygon.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Specializations</h4>
              <ul className="text-sm space-y-2 text-zinc-300">
                <li>• 2D Digital Illustration</li>
                <li>• 3D Character Modeling</li>
                <li>• Architectural Visualization</li>
                <li>• Unreal Engine 5</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Tools I Use</h4>
              <ul className="text-sm space-y-2 text-zinc-300">
                <li>• Adobe Photoshop</li>
                <li>• Blender / Maya</li>
                <li>• ZBrush</li>
                <li>• Substance Painter</li>
              </ul>
            </div>
          </div>

          <div className="h-px w-full bg-white/5" />

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Get In Touch</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Mail size={20} />, label: "Email", color: "hover:bg-blue-600" },
                { icon: <Globe size={20} />, label: "Github", color: "hover:bg-zinc-800" },
                { icon: <Share2 size={20} />, label: "Instagram", color: "hover:bg-pink-600" },
                { icon: <Users size={20} />, label: "LinkedIn", color: "hover:bg-blue-700" }
              ].map((social, i) => (
                <button 
                  key={i} 
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 transition-all ${social.color}`}
                >
                  {social.icon}
                  <span className="text-sm font-semibold">{social.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
