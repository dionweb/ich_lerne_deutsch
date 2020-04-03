#!/usr/bin/env sh

npm run build
cd ild_docs
vuepress build
cd .vuepress
mv dist ../../dist/ebook 
cd ../../dist
touch CNAME
echo 'ichlernedeutsch.info' >> CNAME
cd ../
git add .
git commit -m 'Update'
git push -u origin master
npm run deploy