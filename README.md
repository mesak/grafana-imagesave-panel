# Image Save Panel Plugin for Grafana

This plugin is a panel plugin for Grafana that allows you to save image to grafana.

## Installation

To install this plugin using the grafana-cli tool:

```bash
grafana-cli plugins install mesak-imagesave-panel
```

## Attention
This plugin directly stores image data in Grafana Database, allowing for quick and convenient addition of images to the dashboard. Please be mindful of the size of the added image data, as excessively large data can directly impact Grafana's performance.

## Usage

1. Add a new panel to your dashboard
2. Select the Image Save Panel
3. Upload your image
4. Save your dashboard

## Screenshots

![Screenshot](https://raw.githubusercontent.com/mesak/grafana-imagesave-panel/main/src/img/screenshot.jpg)
