// const http = require('http');

// const hostname =  '127.0.0.1';
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('content-Type', 'text/plain');
//     res.end('Hello Node.... :');

// });


// server.listen(port, hostname, () => {
//     console.log('server is running......');
// });

const express = require('express');

const hostname =  '127.0.0.1';
const port = 5000;

const app = express();

app.get("/", (req, res)=> {
    res.send("Hello Express J5");
})

app.listen(port, ()=> {
    console.log('server is running......');

});



app.delete('/:id',(req, res) =>)



































