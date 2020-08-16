# HLS Services Practice

## How to start?
```bash
$ cd server
# 1. Convert to .m3u8 file
$ node convert.js
# 2. Start server
$ node index.js
# 3. Use `ffplay` to try video
$ ffplay http://127.0.0.1:8000/streams/output.m3u8
# 4. http://127.0.0.1:8000
# 5. Type `http://localhost:8000/streams/output.m3u8` in text field.
```