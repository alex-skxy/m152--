import {createServer} from 'http';
import fs from 'fs';

const server = createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            console.log(err);
            // set response header
            res.writeHead(200, {'Content-Type': 'text/html'});

            // set response content
            res.write(data);
            res.end();
        });

    }
});


server.listen(8080, () => {
    console.log(`listening on ${server.address().port}`);
})