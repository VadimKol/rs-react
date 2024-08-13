import { type Character } from 'rickmortyapi';

export const charactersToCsv = (characters: Character[]): string => {
  const temp = characters.map((character) => ({
    name: character.name,
    species: character.species,
    gender: character.gender,
    status: character.status,
    origin: character.origin.name,
    location: character.location.name,
    episodes: character.episode.map((episode) => episode.replace(/\D/g, '')).join(', '),
    url: character.url,
  }));

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
