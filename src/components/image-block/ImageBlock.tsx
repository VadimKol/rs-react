import Image from 'next/image';
import { type ReactNode, useState } from 'react';

import { Loader } from '../loader/Loader';
import styles from './styles.module.scss';
import type { ImageBlockProps } from './types';

export function ImageBlock({ src, alt }: ImageBlockProps): ReactNode {
  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    <div className={styles.image_container}>
      {isImageLoading && <Loader />}
      <Image
        className={styles.character_img}
        src={src}
        alt={alt}
        onLoad={() => setIsImageLoading(false)}
        style={{ display: isImageLoading ? 'none' : 'block' }}
      />
    </div>
  );
}
