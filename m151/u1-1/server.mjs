import {createServer} from 'http';

const server = createServer();
server.listen(8080, () => {
    console.log(`listening on ${server.address().port}`);
})