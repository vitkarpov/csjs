const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PORT = 3000;

http.createServer(requestHandler).listen(PORT, (err) => {
    if (err) {
        console.log('An error occurred: ', err);
        return;
    }
    console.log(`Server is running: http://localhost:${PORT}/?profile=queue`);
});

function requestHandler(req, res) {
    const query = url.parse(req.url).query || '';
    const [key, source] = query.split('=');

    if (key !== 'profile') {
        res.writeHead(400, 'Invalid query params', { 'content-type': 'text/plain' });
        res.end('Invalid query params');
        return;
    }

    const fileContent = fs.readFileSync(path.join(source, 'profiler.js'));
    vm.runInThisContext(fileContent)(require);

    res.writeHead(200, 'OK', { 'content-type': 'text/plain' });
    res.end('OK');
}
