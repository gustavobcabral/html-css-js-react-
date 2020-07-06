const moduleA = require("../../moduleA");
console.log(moduleA.ola);


const c = require('./pastaC/index')
console.log(c.ola)


// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Bom Dia!");
//     res.end();
//   })
//   .listen(8080);