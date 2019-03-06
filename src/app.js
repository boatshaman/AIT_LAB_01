const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.use(express.urlencoded({extended:false}));

const birdsdic = {birds:{"Bald Eagle":3,"Yellow Billed Duck":7,"Great Cormorant":4}};
const filterNum = 0
const birdslst = ["Bald Eagle","Yellow Billed Duck","Great Cormorant"];
let birdstring = ``
app.get('/', (req, res) => {
    res.render('layout',null);
 });

 app.get('/birds', (req, res) => {
     // name for the page 
    let content;
    if(req.ruery){
        content = birdsdic;
    }else{
        let newdic = {birds:{}};
        for(let i in birdsdic){
            if(birdsdic[i] >= filterNum){
                newdic.birds[i] = birdsdic.birds[i];
            }
        }
        content = newdic;
    }
    res.render('home',content);
 });

app.get('/settings', (req, res) => {
    if(req.query.hasOwnProperty('mininum')){
    };
});


 app.post('/', (req, res) => {
    res.send(req.body);
    pets.push(req.body.name);
    res.redirect('/');
 });

 app.listen(3000);