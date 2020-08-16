const HLSServer = require('hls-server')
const http = require('http')

const server = http.createServer()
const hls = new HLSServer(server, {
  path: '/streams',     // Base URI to output HLS streams
  dir: 'source-m3u8'  // Directory that input files are stored
})

const port = 8000;
server.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})