const express = require('express');
const path = require('path');
const port = parseInt(process.env.PORT, 10) || 9000;

const app = express();
app.use(express.static(path.join(__dirname, '../../dist')));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});
console.log(`👻 Server listening on port ${port} ...`); // eslint-disable-line no-console
app.listen(port);
