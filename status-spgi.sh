#!/bin/bash

export PATH=$PATH:/Users/dex/homebrew/bin/:/Users/dex/bin
out=$(NO_COLOR=1 ticker.sh SPGI)

echo $(cat <<-EOF
{
  "value": "${out}"
}
EOF
)
