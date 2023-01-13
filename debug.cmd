@echo off

set NODE_OPTIONS=--openssl-legacy-provider
set port=5050
node  --expose-gc --inspect --trace-deprecation app.js
