type SeriesSize = 'sm' | 'md' | 'lg';

export interface ImageSaveOption {
  svg: string;
  viewbox: string;
  lowcolor: string;
  middlecolor: string;
  highcolor: string;
  thresholdlow: number;
  thresholdhigh: number;
  description: string;
  showUnitsValue: boolean; // 顯示單位
  seriesCountSize: SeriesSize;
  valuecolor: string;
  units: string;
  openInNextTab: boolean;
  addLinks: string;

  showImage: string;
  showIsResponsive: boolean; //與尺寸相同
  showIsRatio: boolean; //維持比例
}
