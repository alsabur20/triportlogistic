#!/bin/bash
if [ "$VERCEL_GIT_COMMIT_REF" == "main" ] || [ "$VERCEL_GIT_COMMIT_REF" == "stage" ]; then
  echo "Proceed with build"
  exit 1
else
  echo "Stop build"
  exit 0
fi
