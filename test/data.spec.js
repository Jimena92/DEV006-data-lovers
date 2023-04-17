import { sortPokemon } from "../src/data.js";

describe("sortPokemon", () => {
  it("Ordenar los Pokémon por nombre de forma ascendente", () => {
    const optionValue = "name-asc";
    const unSortedData = [
      { name: "pikachu" },
      { name: "bulbasaur" },
      { name: "charizard" },
    ];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([
      { name: "bulbasaur" },
      { name: "charizard" },
      { name: "pikachu" },
    ]);
  });

  it("Ordenar los Pokémon por nombre de forma descendente", () => {
    const optionValue = "name-desc";
    const unSortedData = [
      { name: "pikachu" },
      { name: "bulbasaur" },
      { name: "charizard" },
    ];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([
      { name: "pikachu" },
      { name: "charizard" },
      { name: "bulbasaur" },
    ]);
  });

  it("Ordenar los Pokémon por número de forma ascendente", () => {
    const optionValue = "num-asc";
    const unSortedData = [{ num: 25 }, { num: 1 }, { num: 6 }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ num: 1 }, { num: 6 }, { num: 25 }]);
  });

  it("Ordenar los Pokémon por número de forma descendente", () => {
    const optionValue = "num-desc";
    const unSortedData = [{ num: 25 }, { num: 1 }, { num: 6 }];
    const sortedData = unSortedData.sort(sortPokemon(optionValue));
    expect(sortedData).toStrictEqual([{ num: 25 }, { num: 6 }, { num: 1 }]);
  });
});

import { searchPokemon } from "../src/data.js";

describe("searchPokemon", () => {
  it("Debería mostrar todos los Pokémon cuyo nombre coincidan con el término de búsqueda", () => {
    const searchText = "bull";
    const unFilteredData = [
      { name: "Granbull", num: "210" },
      { name: "Raticate", num: "20" },
      { name: "Charizard", num: "6" },
      { name: "Snubbull", num: "209" },
      { name: "Pikachu", num: "25" }
    ];
    const filteredData = searchPokemon(searchText, unFilteredData);
    expect(filteredData).toStrictEqual([
      { name: "Granbull", num: "210" },
      { name: "Snubbull", num: "209" }
    ]);
  });

  it('Debería mostrar todos los Pokémon cuyo número coincidan con el término de búsqueda', () => {
    const searchText = '20';
    const unFilteredData = [
      { name: 'Granbull', num: '210' },
      { name: 'Raticate', num: '20' },
      { name: 'Charizard', num: '6' },
      { name: 'Snubbull', num: '209' },
      { name: 'Pikachu', num: '25' }
    ];
    const filteredData = searchPokemon(searchText, unFilteredData);
    expect(filteredData).toStrictEqual([{ name: 'Raticate', num: '20' }, { name: 'Snubbull', num: '209' }]);
  });

  it("No debería mostrar ningún Pokémon si el término de búsqueda no coincide", () => {
    const searchText = "xyz";
    const unFilteredData = [
      { name: "Granbull", num: "210" },
      { name: "Raticate", num: "20" },
      { name: "Charizard", num: "6" },
      { name: "Snubbull", num: "209" },
      { name: "Pikachu", num: "25" },
    ];
    const filteredData = searchPokemon(searchText, unFilteredData);
    expect(filteredData).toStrictEqual([]);
  });
});

import { getMaxBaseValue } from "../src/data.js";

describe("getMaxBaseValue", () => {
  it("Encontrar el valor máximo de ataque", () => {
    const statName = "base-attack";
    const maxValue = getMaxBaseValue(statName);
    expect(maxValue).toBe(300);
  });
  it("Encontrar el valor máximo de defensa", () => {
    const statName = "base-defense";
    const maxValue = getMaxBaseValue(statName);
    expect(maxValue).toBe(396);
  });
  it("Encontrar el valor máximo de stamina", () => {
    const statName = "base-stamina";
    const maxValue = getMaxBaseValue(statName);
    expect(maxValue).toBe(496);
  });
  it("Encontrar el valor máximo de cp", () => {
    const statName = "max-cp";
    const maxValue = getMaxBaseValue(statName);
    expect(maxValue).toBe(4178);
  });
  it("Encontrar el valor máximo de hp", () => {
    const statName = "max-hp";
    const maxValue = getMaxBaseValue(statName);
    expect(maxValue).toBe(403);
  });
});

import { filterPokemonByType } from "../src/data.js";

describe("filterPokemonByType", () => {
  it("Mostrar Pokémon que incluyan el elemento Bug", () => {
    const type = "bug";
    const typePokemon = [
      { name: "pikachu", type: "electric"},
      { name: "paras", type: ["bug", "grass"]},
      { name: "butterfree", type: ["bug","flying"]}
    ];
    const typeFilter = filterPokemonByType(type, typePokemon);
    expect(typeFilter).toStrictEqual([
      { name: "paras", type: ["bug", "grass"]},
      { name: "butterfree", type: ["bug","flying"]}
    ]);
  });
});


import { filterPokemonByRegion } from "../src/data.js";

describe("filterPokemonByRegion", () => {
  it("Mostrar Pokémon de region Kanto", () => {
    const region = "kanto";
    const regionPokemon = [
      { name: "pikachu",  generation: { num: "generation i", name: "kanto" }},
      { name: "weepinbell", generation: { num: "generation i", name: "kanto" }}
    ];
    const regionFilter = filterPokemonByRegion(region, regionPokemon);
    expect(regionFilter).toStrictEqual([
      { name: "pikachu",  generation: { num: "generation i", name: "kanto" }},
      { name: "weepinbell", generation: { num: "generation i", name: "kanto" }}
    ]);
  });
});
