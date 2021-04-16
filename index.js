// const a = "gabriel";
// const b = 10;
// const_ = require('lodash')

// console.log("a is equal to : %s and be is equal to : %d",a,b)

// let hunned = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
// 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
// 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
// 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
// 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
// 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

//my fizbuzz

// const fizzBuzz = (len) =>{
// for (let i = 0; i <= len; i++ ){
// let output = "";
// if (i % 3 === 0) {output += "fizz"}
// if (i % 5 === 0) {output += "buzz"}
// console.log(!output ? i : output)

// }
// }

// fizzBuzz(100)

//oneline fizzbuz
// const shortBuzz = (len) => {
//    for (let i = 0; i <= len; ){
//    console.log((++i%3? '' : "fizz")+(i%5? '' : "buzz")+(i%7? '' : "POP!") || i)
//    }
// }

// shortBuzz(106)

// const os = require("os");

// console.log(os.type());
// console.log(os.platform());

//post request 
const axios = require('axios')

const data = JSON.stringify({
    name: "Ghostface Killah",
    crew: "Wu-tang"
});

//request
// const options = {
//     hostname: 'reqres.in', 
//     path: '/api/users',
//     method: 'POST',
//     header: {
//     'Content-Type': 'application/json'
//     }
// };

const url = 'https://reqres.in/api/users';

axios.post(url, data).then( res => {
    console.log(`Status Code : ${res.status}`);
    console.log(`Body: ${JSON.stringify(res.data)}`)
}).catch(err=>{
    console.log(err)
})

// const req = http.request(options, (res) => {
//     let body = '';
//     console.log("status code:", res.statusCode);

//     res.on('data', (chunk) => {
//         body += chunk;
//     })

//     let parsedData = JSON.parse(body);
//     res.on('end', ()=> {
//         console.log("Body: ", parsedData)
//     })
// })

// req.write(data);
// req.end()

//get request

// const http = require("http");
// const { report } = require("process");

// http.get('http://api.open-notify.org/astros.json', resp => {
//     let data= '';
//     resp.on('data', chunk =>{
//         data += chunk
//     });
//     resp.on('end', ()=>{
//         let json = JSON.parse(data);
//         json.people.forEach(element => {
//             console.log(`%c${element.name}`, "color:red;")
//         })
//     })
// })



//open a server port
// const hostname = '127.0.0.1';
// const port = 2046;

// http.createServer((req,resp) => {
//     resp.writeHead(200,{'Content-Tyoe': 'text/plain'})
//     // resp.statusCode = 200;
//     // resp.setHeader('Content-Tyoe', 'text/plain');
//     resp.write("Welcome to HTTP Server");
//     resp.write(`server running at http://${hostname}:${port}/`)
//     resp.end()
// }).listen(port, hostname, ()=> {
//     console.log(`server running at http://${hostname}:${port}/`)
// });