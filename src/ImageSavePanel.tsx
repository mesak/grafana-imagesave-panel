import React from 'react';
import { css } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import { PanelProps } from '@grafana/data';
import { ImageSaveOption, ImageData } from './ImageSaveOption';
interface Props extends PanelProps<ImageSaveOption> {}

export const ImageSavePanel: React.FC<Props> = ({ options, width, height }) => {
  // let showData = data.series.length > 0;
  const styles = getStyles(options);
  // console.log('options', options);
  const picWidth = width;
  const picHeight = height;

  let { image: imageContext }: ImageData = options.context;
  const imageAttr: any = {};
  if (options.showIsResponsive) {
    const windowAspectRatio = picWidth / picHeight;
    const imageAspectRatio = options.context.width / options.context.height;

    if (imageAspectRatio > windowAspectRatio) {
      imageAttr.width = picWidth;
    } else {
      imageAttr.width = picHeight * imageAspectRatio;
    }
    if (!options.showIsRatio) {
      imageAttr.width = picWidth;
      imageAttr.height = picHeight;
    }
  }
  const imageEle = <img className={styles.mainImage} src={imageContext} {...imageAttr} />;
  const outputEle = options.hasLink ? (
    <a href={options.hyperlink} target="noreferrer" className={styles.hyperlink} title={options.linkTitle}>
      {imageEle}
    </a>
  ) : (
    imageEle
  );
  return <div>{outputEle}</div>;
};

const getStyles = stylesFactory((options) => {
  return {
    hyperlink: css`
      display: block;
    `,
    mainImage: css`
      display: block;
      background-color: ${options.hasBackground ? options.backgroundColor : 'transparent'};
    `,
  };
});
