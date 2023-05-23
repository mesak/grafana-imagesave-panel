rm -rf dist mesak-imagesave-panel.zip mesak-imagesave-panel.sha1
yarn build
npx @grafana/sign-plugin@latest --rootUrls https://**.grafana.com
mv dist mesak-imagesave-panel
zip -r mesak-imagesave-panel mesak-imagesave-panel
mv  mesak-imagesave-panel dist
sha1sum mesak-imagesave-panel.zip > mesak-imagesave-panel.sha1
