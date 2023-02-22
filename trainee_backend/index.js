const http = require('http')
const port = 4000
const hostname = '127.0.0.1';
// Create a server object:
const server = http.createServer(function (req, res) {

	// Write a response to the client
	res.write('Hello World')

	// End the response
	res.end()
})

// Set up our server so it will listen on the port
server.listen(port, function (error) {

	// Checking any error occur while listening on port
	if (error) {
		console.log('Something went wrong', error);
	}
	// Else sent message of listening
	else {
		console.log('Server is listening on port' + port);
         console.log(`Server running at http://${hostname}:${port}/`);
	}
})
