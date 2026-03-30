import fs from 'fs';
import path from 'path';

export interface Artwork {
  id: string;
  category: '2d' | '3d';
  slug: string;
  title: string;
  description: string;
  date: string;
  coverUrl: string;
  link?: string;
}

const ARTWORKS_DIR = path.join(process.cwd(), 'public', 'artworks');

export function getArtworks(): Artwork[] {
  const categories = ['2d', '3d'] as const;
  const artworks: Artwork[] = [];

  categories.forEach(category => {
    const categoryPath = path.join(ARTWORKS_DIR, category);
    
    if (!fs.existsSync(categoryPath)) return;

    const folders = fs.readdirSync(categoryPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    folders.forEach(slug => {
      const artworkPath = path.join(categoryPath, slug);
      const metaPath = path.join(artworkPath, 'meta.json');
      const linkPath = path.join(artworkPath, 'link.txt');
      
      if (!fs.existsSync(metaPath)) return;

      try {
        const metaContent = fs.readFileSync(metaPath, 'utf8');
        const meta = JSON.parse(metaContent);
        
        // Link logic for 3D art
        let link = undefined;
        if (category === '3d' && fs.existsSync(linkPath)) {
          link = fs.readFileSync(linkPath, 'utf8').trim();
        }

        artworks.push({
          id: `${category}-${slug}`,
          category,
          slug,
          title: meta.title || slug,
          description: meta.description || '',
          date: meta.date || '',
          coverUrl: `/artworks/${category}/${slug}/cover.jpg`,
          link: link
        });
      } catch (error) {
        console.error(`Error reading artwork ${category}/${slug}:`, error);
      }
    });
  });

  return artworks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArtwork(category: string, slug: string): Artwork | undefined {
  const artworks = getArtworks();
  return artworks.find(a => a.category === category && a.slug === slug);
}
