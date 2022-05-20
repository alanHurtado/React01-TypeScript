import { resolve } from "node:path/win32";
import { personas } from "../data/personas";

export const Promesas = () => {
  let resultado: any = {};

  //Una promesa es literal prometer algo y regresar un resultado
  // Se puede definir como un if, pero no se manda alguna condicion si no se espera una respuesta
  // dependiendo las respuesta se regresa o realiza una accione
  //normalmente no creamos la promesa si no la consumimos por asi decirlo

  const getPersonaApp = (lastName: string) =>
    personas.filter((per) => per.last_name === lastName);

  //   Crear una promesa
//   const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const persona = getPersonaApp("Wong");
//       resolve(persona); // si se cumple
//       reject("Error Persona no encontrada"); //si no se umple la promes
//     }, 2000);
//   });
//   promesa
//     .then((persona) => {
//       console.log("si la promesa se cummple", persona);
//     })
//     .catch((err) => console.log(err)); // si no se cumple la promesa

  // Consumir una promesa
  //normalmente tenemos que generar la promesa dentro de otra funcion
  const consumiPromsea = (argumento: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const persona = getPersonaApp("Wong");
        resolve(persona); // si se cumple
        reject("Error Persona no encontrada"); //si no se umple la promes
      }, 2000);
    });
  };

  //Ahora si consumismo
  consumiPromsea('Wong').then((persona)=>{
      console.log(persona);     
  })

  resultado = {...resultado};

  return (
    <code>
      <pre>{JSON.stringify(resultado, null, 2)}</pre>
    </code>
  );
};
