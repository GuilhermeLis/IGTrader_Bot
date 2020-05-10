import express from "express";

import './index.js'

const app = express();
const port = 3000;


app.get('/',(require, response)=> response.send('Hello world'))

app.listen(port)
