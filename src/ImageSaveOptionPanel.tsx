import React, { FormEvent } from 'react';
import {
  InlineFieldRow,
  InlineField,
  InlineSwitch,
  FileUpload,
  Slider,
  VerticalGroup,
  stylesFactory,
} from '@grafana/ui';
import { StandardEditorProps } from '@grafana/data';
import { css } from 'emotion';
// import { PanelOptionsEditorBuilder } from '@grafana/data';
// import { OptionsUIBuilders } from '@grafana/data';

export const ImageSaveOptionPanel: React.FC<StandardEditorProps<boolean>> = ({
  context,
  onChange,
}: StandardEditorProps) => {
  const customOptions: any = context.options;
  // console.log('context', context.options);
  // console.log('customOptions', customOptions);
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
          resolve(base64);
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
      .then((base64Image) => {
        // console.log('Base64 image:', base64Image);
        // Do something with the base64 image
        onUpdateChange('showImage', base64Image);
      })
      .catch((error) => {
        console.error('Error converting to base64:', error);
      });
  };
  const testChange = (e) => {
    console.log('testChange', e);
  };
  const settings = {
    showSlider: true,
    step: 1,
    value: 100,
  };
  const styles = getStyles(customOptions);
  return (
    <>
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
      <VerticalGroup spacing="none">
        <h5>Image Show Settings</h5>
        <InlineFieldRow aria-label="">
          <InlineField label="Responsive Size" labelWidth={18}>
            <InlineSwitch checked={customOptions.showIsResponsive} name="showIsResponsive" onChange={onInputChange} />
          </InlineField>
        </InlineFieldRow>
        <InlineFieldRow aria-label="">
          <InlineField label="Is Ratio" labelWidth={18}>
            <InlineSwitch checked={customOptions.showIsRatio} name="showIsRatio" onChange={onInputChange} />
          </InlineField>
        </InlineFieldRow>
      </VerticalGroup>
    </>
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
