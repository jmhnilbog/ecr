#!/usr/bin/env bash

# Generate simlinks from all files in a given directory to the
# current directory. Each simlink is prefixed with a custom
# string and a hyphen.
#
# The prefix is ignored if already present in the file name.

# Example:
#   (called from within packs/adventures/sotss/assets/tokens/beastmen)
# simlink-assets.sh acolytes acolyte

if ! [ $# -eq 2 ]; then
    echo "ERROR: Two arguments must be supplied; first, a directory; second, a prefix to apply to the simlink names."
    exit 1
fi

DIRECTORY=$1
LINK_PREFIX=$2

DELIMITER="-"

if ! [ -d "${DIRECTORY}" ]; then
    echo "ERROR: The first argument, '${DIRECTORY}' is not a directory."
    exit 2
fi

function join_by {
    local IFS="$1"
    shift
    echo "$*"
}

for F in "${DIRECTORY}"/*; do

    FILE_BASENAME="$(basename "${F}")"

    FILE_BASENAME_MINUS_EXTENSION=${FILE_BASENAME%%.*}
    FILE_EXTENSION=${FILE_BASENAME#*.}

    PREFIX_ALREADY_PRESENT=false
    IFS=$DELIMITER read -ra CHUNKS <<<"${FILE_BASENAME_MINUS_EXTENSION}"
    for i in "${CHUNKS[@]}"; do
        if [[ "${i}" == *"${LINK_PREFIX}"* ]]; then
            PREFIX_ALREADY_PRESENT=true
        fi
    done

    if [[ $PREFIX_ALREADY_PRESENT == false ]]; then
        # echo "${LINK_PREFIX} not found in ${F}"
        CHUNKS=("${LINK_PREFIX}" "${CHUNKS[@]}")
    fi

    LINK_NAME=$(join_by - "${CHUNKS[@]}").${FILE_EXTENSION}

    ln -s "${F}" "${LINK_NAME}"
done
