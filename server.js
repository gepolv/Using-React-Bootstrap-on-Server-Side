var express = require('express');
var path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const port = 4000;
app.listen(port);
