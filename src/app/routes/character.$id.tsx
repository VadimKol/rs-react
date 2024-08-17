import { type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type ReactNode } from 'react';
import { type Character, getCharacter, getCharacters } from 'rickmortyapi';

import { type CharactersData } from '@/common/types';
import { parseCharacterData, parseCharactersData } from '@/common/utils';
import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { Main } from '@/components/main/Main';

export const loader = async ({
  params: { id },
  request,
}: LoaderFunctionArgs): Promise<{ charactersData: CharactersData; character: Character | null }> => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  const search = url.searchParams.get('search');

  const [
    { data, status, statusMessage },
    { data: dataCharacter, status: statusCharacter, statusMessage: statusMessageCharacter },
  ] = await Promise.all([getCharacters({ page: Number(page), name: String(search) }), getCharacter(Number(id))]);

  const charactersData = parseCharactersData(data, status, statusMessage);
  const character = parseCharacterData(dataCharacter, statusCharacter, statusMessageCharacter);

  return { charactersData, character };
};

export default function Page(): ReactNode {
  const { charactersData, character } = useLoaderData<typeof loader>();

  return (
    <Main charactersData={charactersData}>
      <DetailedCard character={character} />
    </Main>
  );
}
