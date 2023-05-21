import { PanelPlugin } from '@grafana/data';
import { ImageSaveOption } from './ImageSaveOption';
import { ImageSavePanel } from './ImageSavePanel';
import { ImageSaveOptionPanel } from './ImageSaveOptionPanel';
export const plugin = new PanelPlugin<ImageSaveOption>(ImageSavePanel).setPanelOptions((builder) => {
  builder.addCustomEditor({
    id: 'setting',
    path: 'setting',
    name: '',
    description: '',
    editor: ImageSaveOptionPanel,
  });
});
