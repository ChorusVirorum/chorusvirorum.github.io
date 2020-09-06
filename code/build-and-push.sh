rm -v -r -d -f ../css
rm -v -r -d -f ../fonts
rm -v -r -d -f ../img
rm -v -r -d -f ../js
rm -v -r -f ../*.*

npm run build
cp -r build/* ../

git add ..
git commit -m 'Updating page'
git push origin master