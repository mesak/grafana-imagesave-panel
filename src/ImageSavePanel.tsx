import React from 'react';
import { css } from 'emotion';
import { stylesFactory, useTheme } from '@grafana/ui';
import { GrafanaTheme, PanelProps } from '@grafana/data';
import { ImageSaveOption, ImageData } from './ImageSaveOption';
interface Props extends PanelProps<ImageSaveOption> { }

export const ImageSavePanel: React.FC<Props> = ({ options, width, height }) => {
  // let showData = data.series.length > 0;
  const styles = getStyles(options);
  // console.log('options', options);
  const picWidth = width;
  const picHeight = height;

  let { image: imageContext }: ImageData = options.context;
  const imageAttr: any = {};
  if (options.showIsResponsive) {
    imageAttr.width = picWidth;
    if (!options.showIsRatio) {
      imageAttr.height = picHeight;
    }
  }
  const imageEle = <img className={styles.mainImage} src={imageContext} {...imageAttr} />;
  const outputEle = options.hasLink ? <a href={options.hyperlink} target="_blank" className={styles.hyperlink} title={options.linkTitle}> {imageEle} </a> : imageEle;
  return <div>{outputEle}</div>;
};


const getStyles = stylesFactory((options) => {
  const theme: GrafanaTheme = useTheme();
  return {
    hyperlink: css`
      display: block;
    `,
    mainImage: css`
      display: block;
      background-color: ${options.hasBackground ? options.backgroundColor : 'transparent'};
    `
  }
})