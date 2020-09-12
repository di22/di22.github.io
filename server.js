//Install express server
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/notary')));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/notary/index.html'));
});

//HEROKU PORT
const port = process.env.PORT || '3001';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
