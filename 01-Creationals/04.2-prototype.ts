/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 *
 * * Es útil cuando queremos duplicar el contenido,
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 *
 * https://refactoring.guru/es/design-patterns/prototype
 */

import { COLORS } from "../helpers/colors.ts";

class Pokemon {
  constructor(
    public name: string,
    public type: string,
    public level: number,
    public attacks: string[],
  ) {
  }

  // Método para clonar el Pokémon
  clone(): Pokemon {
    return new Pokemon(
      this.name,
      this.type,
      this.level,
      [...this.attacks],
    );
  }

  displayInfo(): void {
    console.log(
      `Nombre: ${this.name}\nTipo: ${this.type}\nNivel: ${this.level}\nAtaques: ${
        this.attacks.join(", ")
      }`,
    );
  }
}

function main() {
  const basePokemon = new Pokemon("Charmander", "Fuego", 1, [
    "Llamarada",
    "Arañazo",
  ]);
  const clone1 = basePokemon.clone();
  clone1.name = "Charmeleon";
  clone1.level = 16;
  clone1.attacks.push("Lanzallamas");

  console.log("%cCharmander", COLORS.red);
  basePokemon.displayInfo();
   
  console.log("%cCharmeleon", COLORS.pink);
  clone1.displayInfo();
}

main();

