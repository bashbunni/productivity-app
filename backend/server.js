import express from 'express';
import apiRouter from './api/main';

const server = express();

server.get('/', (req, res) => { res.send('Hello!') });

server.use('/api', apiRouter);

server.listen(8000, () => {
    console.log('Listening on port 8000')
})

/*
start server using cmd: $ npx babel-node server.js
*/