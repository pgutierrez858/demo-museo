// interfaz de TS para representar el tipo de datos de una obra de arte
export interface ArtworkData {
  objectID: number;
  isHighlight: boolean;
  objectName: string;
  title: string;
  objectURL: string;
}

export default function Artwork({ artworkData }: { artworkData: ArtworkData }) {

  console.log("Rendering Artwork component with data:", artworkData);
  
  // método de conveniencia para "pintar" el nombre de la obra en un formato específico.
  // notad cómo esto es simplemente JS, pero usado dentro del cuerpo de la propia función.
  function formatName(data: ArtworkData) {
    return `${data.objectID}. ${data.title}${data.isHighlight ? "*" : ""}`;
  }

  // return donde devolvemos el JSX con el contenido del componente.
  // observad cómo el href del enlace hace uso de una propiedad del objeto pasado
  // como parámetro, y cómo el innnerHTML del nodo está construido dinámicamente
  // por medio de una llamada a la función que nos hemos declarado arriba.
  return <a href={artworkData.objectURL}>{formatName(artworkData)}</a>;
}
