export interface ImageData {
  image: string;  //Image base64_encode
  width: number;
  height: number;
}
export interface ImageSaveOption {
  hasLink: boolean;
  hyperlink: string;
  linkTitle: string;
  hasBackground: boolean;
  backgroundColor: string;
  context: ImageData;
  showIsResponsive: boolean; //與尺寸相同
  showIsRatio: boolean; //維持比例
}
