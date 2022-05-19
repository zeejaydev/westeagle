const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('./public'));
app.use(express.static('./public/css'));
app.use(express.static('./public/js'));
app.use(express.json());

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './public/home.html'));
});

app.listen(3000,()=>console.log('server running'))