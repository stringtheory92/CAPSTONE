#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for front end to create the production build
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

bundle install
# bundle exec rake assets:precompile # These lines are commented out because we have an API only app
# bundle exec rake assets:clean # These lines are commented out because we have an API only app
bundle exec rake db:migrate 
bundle exec rake db:seed