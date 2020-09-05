npm run build
rm -v -r -d -f ../css
rm -v -r -d -f ../fonts
rm -v -r -d -f ../img
rm -v -r -d -f ../js
cp -r build/* ../

git add .
git add ..
git commit -m 'Updating page'
git push origin master