import { findArtworkByID } from "../mockData";

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ objectID: string }>;
}) {
  const { objectID } = await params;

  const artwork = findArtworkByID(Number(objectID));

  if (!artwork) {
    return (
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Obra no encontrada</h1>
        <p className="text-gray-700">
          Lo sentimos, no pudimos encontrar la obra con ID {objectID}.
        </p>
      </main>
    );
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{artwork.title}</h1>

      {artwork.imageSrc && (
        <img
          src={artwork.imageSrc}
          alt={artwork.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <ul className="space-y-2 text-gray-700">
        <li>
          <strong>ID:</strong> {artwork.objectID}
        </li>
        <li>
          <strong>Tipo:</strong> {artwork.objectName}
        </li>
        <li>
          <strong>Destacada:</strong> {artwork.isHighlight ? "Sí" : "No"}
        </li>
      </ul>
    </main>
  );
}
