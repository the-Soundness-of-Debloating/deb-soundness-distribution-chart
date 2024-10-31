#!/bin/bash

dir="$1" 

cd ..

if [[ -d "$dir" ]]; then
    cd "$dir" || exit  
    find . -type f -exec rm -f {} \;
else
    echo " '$dir' is not exist"
fi
