#!/usr/bin/env bash

ENDPOINT="http://localhost:4566"

DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

PAYLOAD='{"metatype":"tenant-log","metadata":{"date":"'$DATE'","type":"f","description":"The redirect_uri parameter is not valid: \"undefined\" If url looks fine, check that you are not including non printable chars","connection_id":"","ip":"10.12.13.1","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36","details":{"body":{"test":"test"},"qs":{},"error":{"message":"The redirect_uri parameter is not valid: \"undefined\" If url looks fine, check that you are not including non printable chars","oauthError":"invalid_request","type":"request-error"}},"hostname":"login0.local.dev.auth0.com","_id":"","tenant":"login0"}}'

PARTITION_KEY='1e9cf787-ab1a-4cf6-95a0-62d2bd2f1b9e'
STREAM="example-stream"

DATA="$(echo -n "$PAYLOAD" | base64)"

aws \
  --no-verify-ssl \
  --region=us-west-2 \
  --endpoint-url="$ENDPOINT" \
  kinesis \
  put-record \
  --stream-name "$STREAM" \
  --partition-key "$PARTITION_KEY" \
  --data "$DATA"
