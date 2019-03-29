#!/bin/bash

if [ ! -e ./dist ]; then
	echo "New build not found"
	exit 0
fi

TARGET_STATIC_DIR="./docs/static"
TARGET_INDEX_PATH="./docs/index.html"

rm -rf $TARGET_STATIC_DIR $TARGET_INDEX_PATH
mv ./dist/static $TARGET_STATIC_DIR

CONTENT=$(<./dist/index.html)
REPLACEMENT="src=static"
echo "${CONTENT//src=\/static/$REPLACEMENT}" > $TARGET_INDEX_PATH

rm -rf ./dist
