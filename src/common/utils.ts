import { type Character, type Info } from 'rickmortyapi';

import { type CharactersData } from './types';

export const charactersToCsv = (characters: Character[]): string => {
  const temp = characters.map(
    ({ name, species, gender, status, origin: { name: origin }, location: { name: location }, episode, url }) => ({
      name,
      species,
      gender,
      status,
      origin,
      location,
      episodes: episode.map((item) => item.replace(/\D/g, '')).join(', '),
      url,
    }),
  );

  const csvRows = [];

  const headers = Object.keys(temp[0] || {});
  csvRows.push(headers.join(','));

  temp.forEach((character) => {
    csvRows.push(
      Object.values(character)
        .map((value) => `"${value.replace(/"/g, '\\"')}"`)
        .join(','),
    );
  });

  return csvRows.join('\n');
};

export const parseCharactersData = (data: Info<Character[]>, status: number, statusMessage: string): CharactersData => {
  switch (status) {
    case 200:
      return { characters: data.results || [], total: data.info?.pages || 0 };
    case 404:
      return { characters: [], total: 0 };
    default:
      throw new Error(statusMessage);
  }
};

export const parseCharacterData = (data: Character, status: number, statusMessage: string): Character | null => {
  switch (status) {
    case 200:
      return data;
    case 404:
      return null;
    default:
      throw new Error(statusMessage);
  }
};
