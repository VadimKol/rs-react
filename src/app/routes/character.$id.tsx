import { type ReactNode } from 'react';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { Main } from '@/components/main/Main';

export default function Page(): ReactNode {
  return <Main>{(characterID) => <DetailedCard characterID={characterID} />}</Main>;
}
