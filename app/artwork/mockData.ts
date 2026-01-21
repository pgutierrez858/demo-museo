import { ArtworkData } from "../components/artworkCard";

export const artworks: ArtworkData[] = [
  {
    objectID: 1,
    isHighlight: true,
    objectName: "Coin",
    title: "One-dollar Liberty Head Coin",
    objectURL: "https://www.metmuseum.org/art/collection/search/1",
  },
  {
    objectID: 2,
    isHighlight: false,
    objectName: "Portions of a Costume Armor",
    title: "Portions of a Costume Armor",
    objectURL: "https://www.metmuseum.org/art/collection/search/27790",
    imageSrc:
      "https://collectionapi.metmuseum.org/api/collection/v1/iiif/27790/2061606/main-image",
  },
];

export const findArtworkByID = (id: number): ArtworkData | undefined => {
  return artworks.find((artwork) => artwork.objectID === id);
};
