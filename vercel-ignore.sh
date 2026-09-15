#!/bin/bash
if [ "$VERCEL_GIT_COMMIT_REF" == "main" ]; then
  echo "Proceed with build"
  exit 1
else
  echo "Stop build"
  exit 0
fi
