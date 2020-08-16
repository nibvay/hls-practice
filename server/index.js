const HLSServer = require('hls-server')
const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = fs.readFileSync('../client/index.html', 'utf8');
  res.write(html);
  res.end();
});

const hls = new HLSServer(server, {
  path: '/streams',     // Base URI to output HLS streams
  dir: 'source_m3u8'  // Directory that input files are stored
})

const port = 8000;
server.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})