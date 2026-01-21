import Link from "next/link";
import Artwork, { ArtworkData } from "./components/artwork";

export default function Home() {
  const artwork: ArtworkData = {
    objectID: 1,
    isHighlight: true,
    objectName: "Coin",
    title: "One-dollar Liberty Head Coin",
    objectURL: "https://www.metmuseum.org/art/collection/search/1",
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Artwork artworkData={artwork} />
        <a href="/about">About Us (versión naive)</a>
        <Link href="/about">About Us (con Link de Next.js)</Link>
      </main>
    </div>
  );
}
