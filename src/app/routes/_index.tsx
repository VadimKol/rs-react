import { type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { type ReactNode } from 'react';
import { getCharacters } from 'rickmortyapi';

import { type CharactersData } from '@/common/types';
import { parseCharactersData } from '@/common/utils';
import { Main } from '@/components/main/Main';

export const loader = async ({ request }: LoaderFunctionArgs): Promise<CharactersData> => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page');
  const search = url.searchParams.get('search');

  const { data, status, statusMessage } = await getCharacters({
    page: Math.floor(Number(page)) || 1,
    name: String(search || ''),
  });

  return parseCharactersData(data, status, statusMessage);
};

export default function Page(): ReactNode {
  const charactersData = useLoaderData<typeof loader>();

  return <Main charactersData={charactersData} />;
}
