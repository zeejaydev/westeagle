const express = require('express');
require('dotenv');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('./public'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.static('./public/assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/home.html'));
});
const port = process.env.PORT || 3000
app.listen(port,()=>console.log('server running'))