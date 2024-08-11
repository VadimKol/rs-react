import { type ReactNode } from 'react';

import DetailedCard from '@/components/detailed-card/DetailedCard';

import Main from '..';

export default function WithDetails(): ReactNode {
  return <Main>{(characterID) => <DetailedCard characterID={characterID} />}</Main>;
}
