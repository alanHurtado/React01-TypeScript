import { personas } from "../data/personas";

export const AsyncAweit = () => {
  let resultado: any = {};

  const getPersonaApp = (lastName: string) =>
    personas.filter((per) => per.last_name === lastName);

  // Asyn y aweit nos simplifica el consumo de las promesas para obtener los valores
  //Asyn se coloca al inicio de una funcion o antes del aweit para que permita el uso de aweit

  const consumiPromsea = (argumento: string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const persona = getPersonaApp("Wong");
        resolve(persona); // si se cumple
        reject("Error Persona no encontrada"); //si no se umple la promes
      }, 2000);
    });
  };
  consumiPromsea("Wong").then((persona) => {
    console.log(persona);
  });

  //Con Asinc y Aweit el código quedara ...

  const getPersona = async () => {
    return "algo";
  };

  getPersona().then(console.log);

  //usando el ejemplo anteriro

  const getPersona2 = async () => {
    const resp = await consumiPromsea("Wong");
    console.log(resp);
  };

  //solo falta implementar los errores para eso

  const getPersona3 = async () => {
    try {
      const resp = await consumiPromsea("Wong");
      console.log(resp);
      return resp;
    } catch (e) {
      console.log();
    }
  };

  resultado = {...resultado, respuesta1: 'listo'}

// El código anteriror es lo mismo a la promesa inicial

  return (
    <code>
      <pre>{JSON.stringify(resultado, null, 2)}</pre>
    </code>
  );
};
