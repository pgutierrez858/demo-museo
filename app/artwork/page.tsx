import ArtworkCard from "../components/artworkCard";
import { artworks } from "./mockData";

export default function ArtworkPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Artworks</h1>

      <ul className="space-y-2">
        {artworks.map((artwork) => (
          <li key={artwork.objectID}>
            <ArtworkCard artworkData={artwork} />
          </li>
        ))}
      </ul>
    </main>
  );
}
