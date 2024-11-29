# Image Save Panel Plugin for Grafana

[![Marketplace](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=marketplace&prefix=v&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fmesak-imagesave-panel&query=%24.version)](https://grafana.com/grafana/plugins/mesak-imagesave-panel)

[![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins%2Fmesak-imagesave-panel&query=%24.downloads)](https://grafana.com/grafana/plugins/mesak-imagesave-panel)

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/mesak/grafana-imagesave-panel?color=brightgreen&logo=github&label=latest)](https://github.com/mesak/grafana-imagesave-panel)
[![License](https://img.shields.io/github/license/mesak/grafana-imagesave-panel)](https://github.com/mesak/grafana-imagesave-panel/blob/master/LICENSE)

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

