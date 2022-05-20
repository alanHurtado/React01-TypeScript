import React from 'react'

export const Basico = () => {
    const name = "Alan";
    const surName = "Hurtado";
  
    //Template string es el uso de bactics
    const nombreCompleto = `${name} ${surName}`;
  
    //Objetos iterables  el type es any para poder extender el objeto, no obstante
    // en type scripr debemos generar la interface que especifique la estructura del objero
    // como sabemos que lo que queremos realizar puede alojar culaqueir valor lo asignamos any
  
    const resultado: any = {
      resultado1: nombreCompleto,
    };
  
    //un objeto se puede observar en consola como
    console.log(resultado);
    console.table(resultado);
    //genera spret como buena practica para clonar el objeto y evitar mutarlo
    resultado.resultado1 = "hola";
    let resultado2 = { ...resultado, resultado2: resultado };
  
    ///Arreglos
    // No utilizar o evitar push
    // Usar el operador Spret
    let arreglo = [1, 2, 3, 4];
    arreglo = [...arreglo, 5, 6, 7];
    resultado2 = { ...resultado2, resultado3: arreglo };
  
    //para recorrer o barrer los arregles usamos map
    const arreglo2 = arreglo.map((numero) => {
      return numero * 2;
    }); //funcion vacia se llama callback
    //numero es la variable que toma en este caso number, puede ser un objeto u otro arreglo
    resultado2 = { ...resultado2, resultado4: arreglo2 };
  
    //funciones
    //funcion tipica no recomdable por que se puede tomar como una variable
    // en todo caso el programa funciona pero maneja un warning
    function saludar(nombre: string) {
      return `hola ${nombre}`;
    }
    //cambiamos el warning para que marque erro al hacerlo de esta manera
    const saludar2 = function (nombre: string) {
      return `hola ${nombre}`;
    };
  
    //funcion flecha
    // ventajas simplificacion en código 
    const saludar3 = (nombre: string) => {
      return `hola ${nombre}`;
    };
    //simplificando cuando solo hay return
    const saludar4 = (nombre: string) => (`hola ${nombre}`);
    
    return (
      <code>
        <pre>{JSON.stringify(resultado2, null, 2)}</pre>
      </code>
    );
}
