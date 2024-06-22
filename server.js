//Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
const http = require("http");
const hostname = "127.0.0.1"; //cái này === http://localhost
const port = 3000;
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n với Đỗ Thắng");
});
//listen for request on port 3000, and as a callback function have the port listened on
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//tự động chạy trên localhost
// server.listen(port, () => {
// console.log(`Server running at http://${hostname}:${port}/`);
// })