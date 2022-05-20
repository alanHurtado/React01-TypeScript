import { personas } from "../data/personas";
export const Destructuracion = () => {
  let resultado: any = {};
  //Con OBJETOS
  interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    enfermo?: boolean;
  }

  const persona: Persona = {
    nombre: "mbre",
    apellido: "lido",
    edad: 23,
    enfermo: false,
  };

  //destructuracion
  const { nombre } = persona;

  //en un funcion
  const verDatosPersona = ({ nombre, edad, enfermo = true }: Persona) => {
    console.log(nombre, edad, enfermo);
  };
  verDatosPersona(persona);

  resultado = { ...resultado, resultado1: nombre };

  // CON ARREGLOS
  const paises = ["exico", "Candad", "Rusia"];
  const [, p3] = paises;
  resultado = {
    ...resultado,
    resultado2: `para obtener el valor del pais 3: ${p3} `,
  };
  // a diferencia de los objetos los arreglos si respetan el orden en que se extraen

  const getPersona = (id: number) => personas.find((per) => per.id === id);
  resultado = {
    ...resultado,
    resultado3: getPersona(2),
  };

  const getPersonaApp = (lastName: string) =>
    personas.filter((per) => per.last_name === lastName);
  resultado = {
    ...resultado,
    resultado4: getPersonaApp("Wong"),
  };

  //find regresa un valor si queremos un arreglo de valores entonces es filter


  return (
    <code>
      <pre>{JSON.stringify(resultado, null, 2)}</pre>
    </code>
  );
  
};
