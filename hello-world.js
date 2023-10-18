var http = require('http');
var fs = require('fs');
var url = require('url');
const { password } = require('./password-generator');


var PORT=3000
// Create a server
http.createServer( function (request, response) 
{  
   // Parse the request containing file name

   // Read the requested file content from file system
   response.write('<h1>Hello from Server </h1>');
  
      response.end()
      // Send the response body 
   } 
).listen(PORT);

// Console will print the message
console.log(`Server is Sueccessfuly runing on Port ${PORT}`);
fs.readFile('welcome.txt', function (err, data) {
 //this is the callBack function
    if (err)  {console.error(err)}
    else {console.log(data.toString())};
 });

password;