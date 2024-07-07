import { Component, type ReactNode } from 'react';

import { Loader } from '../loader/Loader';
import styles from './styles.module.scss';
import type { ImageBlockProps, ImageBlockState } from './types';

export class ImageBlock extends Component<ImageBlockProps, ImageBlockState> {
  constructor(props: ImageBlockProps) {
    super(props);
    this.state = { isImageLoading: true };
  }

  public render(): ReactNode {
    const { src, alt } = this.props;
    const { isImageLoading } = this.state;
    return (
      <div className={styles.image_container}>
        {isImageLoading && <Loader />}
        <img
          className={styles.character_img}
          src={src}
          alt={alt}
          onLoad={() => this.setState({ isImageLoading: false })}
          style={{ display: isImageLoading ? 'none' : 'block' }}
        />
      </div>
    );
  }
}
