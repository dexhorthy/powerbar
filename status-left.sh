#!/bin/bash

# Check if chunkc exists
if ! [ -x "$(command -v /Users/dex/homebrew/bin/yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi

DESKTOP_ACTIVE=$(/Users/dex/homebrew/bin/yabai -m query --spaces | /Users/dex/homebrew/bin/jq '.[] | select(.visible == 1) | .index')
DESKTOP_START=1
DESKTOP_END=6

echo $(cat <<-EOF
{
	"desktop": {
		"active": $DESKTOP_ACTIVE,
		"start": $DESKTOP_START,
    "end": $DESKTOP_END
	}
}
EOF
)
