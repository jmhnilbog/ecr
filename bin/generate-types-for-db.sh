#!/usr/bin/env bash

for w in world-data/*; do
    for t in "${w}"/*; do
        ./node_modules/.bin/quicktype "${t}" -o "typeDefinitions/DB$(basename "$t").ts"
    done
done
