import React, { FormEvent } from 'react';
import {
  InlineFieldRow,
  InlineField,
  InlineSwitch,
  FileUpload,
  VerticalGroup,
  stylesFactory,
} from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';
import { css } from 'emotion';
import { ImageData } from './ImageSaveOption';
export const ImageSaveOptionPanel: React.FC<StandardEditorProps<boolean>> = ({
  context,
  item,
  onChange,
}: StandardEditorProps) => {
  const customOptions: any = context.options[item.id] || {};
  console.log('context', context.options);
  console.log('customOptions', customOptions);
  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    let newValue: any = value;
    if (type === 'number') {
      newValue = Number(value);
    }
    if (type === 'checkbox') {
      newValue = (e.target as HTMLInputElement).checked;
    }
    onUpdateChange(name, newValue);
  };
  const onUpdateChange = (name: string, value: any): void => {
    customOptions[name] = value;
    onChange(customOptions);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        const img: HTMLImageElement = new Image();
        img.onload = () => {
          const canvas: HTMLCanvasElement | null = document.getElementById('canvas');
          if (canvas === null) {
            return;
          }
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const base64 = canvas.toDataURL('image/png');
          resolve({
            image: base64,
            width: img.width,
            height: img.height,
          });
        };
        img.src = event.target.result;
      };
      reader.onerror = function (event) {
        reject(event.target.error);
      };
      reader.readAsDataURL(file);
    });
  };
  const onFileUpload = (event: FormEvent<HTMLInputElement>) => {
    const file: File = event.target.files[0];
    convertToBase64(file)
      .then((imageData: ImageData) => {
        // console.log('Base64 image:', base64Image);
        // Do something with the base64 image
        onUpdateChange('image', imageData.image);
        onUpdateChange('width', imageData.width);
        onUpdateChange('height', imageData.height);
      })
      .catch((error) => {
        console.error('Error converting to base64:', error);
      });
  };
  const styles = getStyles(customOptions);
  return (
    <VerticalGroup spacing="none">
      <h5>Image Settings</h5>
      <InlineFieldRow aria-label="Image Upload">
        <FileUpload accept="image/*" onFileUpload={onFileUpload}>
          Upload Image File
        </FileUpload>
      </InlineFieldRow>

      <div className="gf-form-group">
        <canvas id="canvas" className={styles.canvas}></canvas>
      </div>
    </VerticalGroup>
  );
};

const getStyles = stylesFactory((options) => {
  return {
    canvas: css`
      border: 2px dashed #fff;
      width: 320px;
      height: auto;
      margin: 10px 0;
    `,
  };
});
