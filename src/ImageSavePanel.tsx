import React from 'react';
import { PanelProps } from '@grafana/data';
import { ImageSaveOption } from './ImageSaveOption';
interface Props extends PanelProps<ImageSaveOption> {}

export const ImageSavePanel: React.FC<Props> = ({ options, width, height }) => {
  // let showData = data.series.length > 0;
  // console.log('options', options);
  const picWidth = width;
  const picHeight = height;

  const imageAttr: any = {};
  if (options.showIsResponsive) {
    imageAttr.width = picWidth;
    if (!options.showIsRatio) {
      imageAttr.height = picHeight;
    }
  }
  const image = <img src={options.showImage} {...imageAttr} />;
  return <div>{image}</div>;
};

// const getStyles = stylesFactory((options) => {
//   return {
//     wrapper: css`

//     `,
//     shapePanel: css`
//       position: relative;
//       padding: 20px;
//       flex: 1;
//       text-align: center;
//       background-color: ${options.backgroundColor};
//     `,
//   };
// });
