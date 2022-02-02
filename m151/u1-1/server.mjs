import {createServer} from 'http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('hello :)');
        res.end();
    }
});


server.listen(8080, () => {
    console.log(`listening on ${server.address().port}`);
})