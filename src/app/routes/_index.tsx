import { type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type ReactNode } from 'react';
import { type Character, getCharacters } from 'rickmortyapi';

import { Main } from '@/components/main/Main';

export const loader = async ({ request }: LoaderFunctionArgs): Promise<{ characters: Character[]; total: number }> => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  const search = url.searchParams.get('search');

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

  return charactersData;
};

export default function Page(): ReactNode {
  const charactersData = useLoaderData<typeof loader>();

  return <Main charactersData={charactersData} />;
}
