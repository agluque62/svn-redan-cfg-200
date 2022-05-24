@echo off

set port=5050
node  --expose-gc --inspect --trace-deprecation app.js
