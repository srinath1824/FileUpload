const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.route('/fileUpload')
    .post(function(req, res, next) {
        console.log("12333333");
        console.log(req);
        res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
        }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
        }]);
    });

app.listen(4000, ()=> {console.log("App is running in port 4000")});