#!/usr/bin/env sh

## Build
npm run build
npm run ebook:build

## Rename and move ebook to dist folder
mv ild_docs/.vuepress/dist/ ild_docs/.vuepress/ebook/
mv ild_docs/.vuepress/ebook/ dist/

## Create CNAME
echo 'ichlernedeutsch.info' >> dist/CNAME

## Stage, commit, push to master branch and deploy to gh-pages
git add .
git commit -m 'UPDATE'
git push -u origin master
npm run deploy