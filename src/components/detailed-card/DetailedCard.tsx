import { type ReactNode, useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { type Character, getCharacter } from 'rickmortyapi';

import { CustomButton } from '../custom-button/СustomButton';
import { ImageBlock } from '../image-block/ImageBlock';
import styles from './styles.module.scss';

export function DetailedCard(): ReactNode {
  const { characterID, setNoMatch } = useOutletContext<{
    characterID: string;
    setNoMatch: (noMatch: boolean) => void;
  }>();
  const [character, setCharacter] = useState<Character>({} as Character);
  const navigate = useNavigate();
  const [err, setErr] = useState('');
  const [loader, setLoader] = useState(true);

  if (err) {
    throw new Error(err);
  }

  useEffect(() => {
    setLoader(true);
    getCharacter(Number(characterID))
      .then((response) => {
        if (response.status === 200) {
          setCharacter(response.data);
        } else if (response.status === 404) {
          setNoMatch(true);
        } else {
          throw new Error(response.statusMessage);
        }
      })
      .catch((error: Error) => setErr(error.message))
      .finally(() => setLoader(false));
  }, [characterID, setNoMatch]);

  const desc = [
    `Species: ${character?.species}`,
    `Gender: ${character?.gender}`,
    `Status: ${character?.status}`,
    `Origin: ${character?.origin?.name}`,
    `Location: ${character?.location?.name}`,
  ];

  return (
    <section className={styles.detailed_Card}>
      {loader ? (
        <div className={styles.loader} />
      ) : (
        <>
          <div className={styles.card}>
            <ImageBlock src={character?.image || ''} alt="Character" />
            <div className={styles.text_container}>
              <h2 className={styles.card_title}>{character?.name}</h2>
              <ul className={styles.desc}>
                {desc.map((item) => (
                  <li key={item} className={styles.desc_item}>
                    {item}
                  </li>
                ))}
              </ul>
              {character?.type !== '' && <p className={styles.type}>Type: {character?.type}</p>}
              <p className={styles.episodes}>
                Episodes: {character?.episode.map((episode) => episode.replace(/\D/g, '')).join(', ')}
              </p>
            </div>
          </div>
          <CustomButton className={styles.close} onClick={() => navigate('/')}>
            Close
          </CustomButton>
        </>
      )}
    </section>
  );
}
