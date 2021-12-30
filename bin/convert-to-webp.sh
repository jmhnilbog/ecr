#!/usr/bin/env bash

# Convert non-webp images to webp within the cwd and subdirectories.
#
# Most additional arguments are passed directly though to cwebp.

find . -type f \
    \( \
    -name "*.gif" -o \
    -name "*.jpg" -o \
    -name "*.jpeg" -o \
    -name "*.gif" -o \
    -name "*.png" \
    \) |
    while read -r LINE; do
        BASENAME=$(basename "${LINE}")
        DIRNAME=$(dirname "${LINE}")
        BASENAME_MINUS_EXTENSION=${BASENAME%%.*}
        cwebp "${LINE}" -o "${DIRNAME}/${BASENAME_MINUS_EXTENSION}.webp" "$@"
    done
