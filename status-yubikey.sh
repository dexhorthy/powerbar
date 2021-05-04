#!/usr/bin/env zsh

CARD_STATUS=$(cat /Users/dex/.card-status)

echo $(cat <<-EOF
{
	"cardstatus": $CARD_STATUS
}
EOF
)
