const fs = require("fs");
const http = require('http');

fs.writeFileSync("index.html",
"<h1> Hello World </h1><p> This is Harshit... </p>",
);

const data = fs.readFileSync('index.html','utf-8', (err,data) => {
    console.log(data);
})

const server = http.createServer((req , res) => {
    res.writeHead(200,{'content-type' : 'text/html'});
    res.end(data)
})

server.listen(5000,() => console.log("done"));

