#!/bin/bash
if [ "${1}" != "clean" ];
then
  npm install -g bower
fi

git pull

cd workbenchDisplay
if [ "${1}" == "clean" ];
then
  echo "Cleaning modules"
  rm -rf node_modules
  cd app
  rm -rf bower_components
  cd ..
  exit;
fi


npm install
bower update

bash start.sh
