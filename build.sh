rm -f dist release/mesak-imagesave-panel.zip release/mesak-imagesave-panel.sha1
yarn build
npx @grafana/sign-plugin@latest 
mv dist mesak-imagesave-panel
zip -r release/mesak-imagesave-panel.zip mesak-imagesave-panel
mv mesak-imagesave-panel dist
sha1sum release/mesak-imagesave-panel.zip > release/mesak-imagesave-panel.sha1
