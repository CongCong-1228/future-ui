
rm -rf dist
# build
yarn build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add .
git commit -m 'deploy'
git branch -M master
git push -f git@github.com:CongCong-1228/future-ui.git master:gh-pages
cd -
