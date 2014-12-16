#!/bin/bash
npm install -g bower

git pull

cd workbenchDisplay
npm install
bower update

bash start.sh
