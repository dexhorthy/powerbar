#!/usr/bin/env zsh

# Check if chunkc exists
if ! [ -x "$(command -v /Users/dex/homebrew/bin/yabai)" ]; then
  echo "{\"error\":\"yabai binary not found\"}"
  exit 1
fi
 
CARD_STATUS=$(cat /Users/dex/.card-status)

DESKTOP_ACTIVE=$(/Users/dex/homebrew/bin/yabai -m query --spaces | /Users/dex/homebrew/bin/jq '.[] | select(.visible == 1) | .index')
DESKTOP_START=1
DESKTOP_END=6

echo $(cat <<-EOF
{
	"desktop": {
		"active": $DESKTOP_ACTIVE,
		"start": $DESKTOP_START,
                "end": $DESKTOP_END,
                "cardstatus": $CARD_STATUS
	}
}
EOF
)
