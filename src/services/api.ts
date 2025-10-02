import type { Character } from "../types/character";

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) throw new Error("Erro na busca de personagem");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

