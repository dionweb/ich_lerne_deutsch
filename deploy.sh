#!/usr/bin/env sh

git init
git add .
git commit -m 'Ich lerne Deutsch'
git remote add origin https://github.com/dionweb/ich_lerne_deutsch.git
git push -u origin master
npm run deploy