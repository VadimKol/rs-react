import { type ReactNode } from 'react';
import { type Character, getCharacter, getCharacters } from 'rickmortyapi';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { Main } from '@/components/main/Main';

export default async function Page({
  params: { id },
  searchParams: { page, search },
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<ReactNode> {
  const { data, status, statusMessage } = await getCharacters({ page: Number(page), name: String(search) });

  let charactersData: { characters: Character[]; total: number };

  if (status === 200) {
    charactersData = { characters: data.results || [], total: data.info?.pages || 0 };
  } else if (status === 404) {
    charactersData = { characters: [], total: 0 };
  } else {
    throw new Error(statusMessage);
  }

  let character: Character | null;

  const {
    data: dataCharacter,
    status: statusCharacter,
    statusMessage: statusMessageCharacter,
  } = await getCharacter(Number(id));

  if (statusCharacter === 200) {
    character = dataCharacter;
  } else if (statusCharacter === 404) {
    character = null;
  } else {
    throw new Error(statusMessageCharacter);
  }

  return (
    <Main charactersData={charactersData}>
      <DetailedCard character={character} />
    </Main>
  );
}
