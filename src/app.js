const express = require('express')
const app = express();

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:false}))



