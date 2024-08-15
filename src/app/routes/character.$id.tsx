import { type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type ReactNode } from 'react';
import { type Character, getCharacter, getCharacters } from 'rickmortyapi';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { Main } from '@/components/main/Main';

export const loader = async ({
  params: { id },
  request,
}: LoaderFunctionArgs): Promise<{
  charactersData: { characters: Character[]; total: number };
  character: Character | null;
}> => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  const search = url.searchParams.get('search');

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

  if (/\D/.test(String(id)) || String(id).startsWith('0')) {
    throw new Response('Id is not a valid number', { status: 404 });
  }

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
