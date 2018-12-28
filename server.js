const http = require('http');
const app = require('./app');
const path = require('path');
const port =5001;
var server = http.createServer(app);


server.listen(port,()=>{
console.log(`listning on ${port} ${path.basename('')}`);
const m ='$2a$10$UwcA7mUHHT4a0/cfHHYone1M1bj/Ye5kPFx3ws0vRD1TP972n8IV.'
console.log(m.length)
})