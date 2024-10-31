#!/bin/sh

cd /home/dell/Desktop/cold/deb-rob/deb-vul-distribution-chart

directories=("deb_lines" "crash_info" "function_lines")

for DIR in "${directories[@]}"; do
    echo "Processing directory: $DIR"

    if [ -d "$DIR" ]; then
        cd "$DIR" || { echo "Cannot enter directory $DIR"; exit 1; }

        for subdir in */; do
            cd "$subdir" || continue  
            for file in *; do
                if [ -f "$file" ]; then
                    IFS='-' read -r part1 part2 part3 part4<<< "$file"

                    if [ -n "$part1" ] && [ -n "$part3" ]; then
                        NEW_NAME="${part1}_${part3}"

                        mv "$file" "$NEW_NAME"

                        echo "Renamed: $file -> $NEW_NAME"
                    else
                        echo "File name format does not meet the requirements: $file"
                    fi
                fi
            done
            cd ..  
        done

        cd ..
    else
        echo "Directory $DIR does not exist"
    fi
done

for DIR in crash_info; do
    echo "Processing directory: $DIR"

    if [ -d "$DIR" ]; then
        cd "$DIR" || { echo "Cannot enter directory $DIR"; exit 1; }

        for subdir in */; do
            cd "$subdir" || continue  
            for file in *; do
                if [ -f "$file" ]; then
                    sed -i 's/UNRECOGNIZED_ERROR/"UNRECOGNIZED_ERROR"/g' "$file"
                    sed -i 's/ ,/ "",/g' "$file"
                fi
            done
            cd ..  
        done
        cd ..
    else
        echo "Directory $DIR does not exist"
    fi
done
