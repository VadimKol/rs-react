import { type ReactNode } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Main } from '@/components/main/Main';

export default async function Page({
  searchParams: { page, search },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<ReactNode> {
  const { data, status, statusMessage } = await getCharacters({
    page: Math.floor(Number(page)) || 1,
    name: String(search || ''),
  });

  let charactersData: { characters: Character[]; total: number };

  if (status === 200) {
    charactersData = { characters: data.results || [], total: data.info?.pages || 0 };
  } else if (status === 404) {
    charactersData = { characters: [], total: 0 };
  } else {
    throw new Error(statusMessage);
  }

  return <Main charactersData={charactersData} />;
}
