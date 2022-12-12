var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/welcome") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    return res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({
      phone: "18602100000",
      email: "guestcaredominos@jublfood.com",
    }));
    return res.end();
  } else if(req.url === '/') {
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.write('Dominos Home Page');
    return res.end();
  } else  {
    res.writeHead(404 );
    res.write('Page not found');
    return res.end();
  }
}

httpServer.listen(8081, () => {
  console.log("Done");
});

module.exports = httpServer;

// const express = require("express");
// const app = express();

// app.get("/", (req,res) => {
//     res.send('Dominos Home Page');
// })

// app.get("/contact", (req,res) => {
//     res.json({
//            phone: "18602100000",
//            email: "guestcaredominos@jublfood.com",
//          });
// })

// app.listen(8081, () => {console.log("done")});