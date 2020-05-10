import http from "http";

const port = process.env.PORT || 3000;

import "./index.js";

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-type": "application/json" });
    response.write(JSON.stringify({ name: "igtrader_bot", version: "0.0.1" }));
    response.end();
  })
  .listen(port);
