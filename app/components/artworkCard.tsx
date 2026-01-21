import Link from "next/link";

export interface ArtworkData {
  objectID: number;
  isHighlight: boolean;
  objectName: string;
  title: string;
  objectURL: string;
  imageSrc?: string;
}

export default function ArtworkCard({ artworkData }: { artworkData: ArtworkData }) {
  function formatName(data: ArtworkData) {
    return `${data.objectID}.${data.title}${data.isHighlight ? " ★" : ""}`;
  }

  return (
    <Link
      href={`/artwork/${artworkData.objectID}`}
      className="block max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white"
    >
      {artworkData.imageSrc && (
        <img
          src={artworkData.imageSrc}
          alt={artworkData.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h2 className="text-lg font-semibold">{formatName(artworkData)}</h2>
        <p className="text-sm text-gray-600">{artworkData.objectName}</p>
      </div>
    </Link>
  );
}
