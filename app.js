const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/public', express.static(path.join(__dirname, './public')));
app.use('/node_modules', express.static(path.join(__dirname, './node_modules')));

// 使用模板引擎
app.engine('html', require('express-art-template'));
// 指定文件目录（默认即为./views目录，这里手动写上，可以将其改为其他目录）
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    res.render('index.html', {
        name: 'LJ'
    });
})

app.listen(3000, () => {
    console.log('Running...')
})