#!/usr/bin/env bash

# Convert gifs to animated webp and webm files.
#
# Most additional arguments are passed directly though to ffmpeg.

find . -type f \
    \( \
    -name "*.gif" \
    \) |
    while read -r LINE; do
        BASENAME=$(basename "${LINE}")
        DIRNAME=$(dirname "${LINE}")
        BASENAME_MINUS_EXTENSION=${BASENAME%%.*}

        ffmpeg -nostdin -i "${LINE}" -c vp9 -b:v 0 -crf 40 "${DIRNAME}/${BASENAME_MINUS_EXTENSION}.webm" "${@}"
        gif2webp "${LINE}" -o "${DIRNAME}/${BASENAME_MINUS_EXTENSION}.webp"
    done
