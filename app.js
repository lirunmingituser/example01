const express = require('express');
const app = express();
const port = 9000;
//app.get('/:text', (req, res) => res.send(req.params.text));
app.get('/', (req, res) => res.send('Hello World!!'));
app.listen(port, () => console.log(`Sample App ${port}!`));