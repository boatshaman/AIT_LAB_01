const http = require('http');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('view options', { layout: '../public/views/layout.hbs' });
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))

const birds = {"Bald Eagle":3,"Yellow Billed Duck":7,"Great Cormorant":4};
let filterNum = 0


app.get('/', (req, res) => {
    res.render('../public/views/home',{});
 });

 app.get('/birds', (req, res) => {
     // name for the page 
   if(req.query.filter === undefined){
   res.redirect(`/birds?filter=${filterNum}`);
   }else{
    let filterBirds = Object.assign(...
    Object.entries(birds).filter(([k,v]) => v>req.query.filter).map(([k,v]) => ({[k]:v})));
    res.render("../public/views/birds",{birds:filterBirds});
   }
   
 });

app.get('/settings', (req, res) => {
    res.render('../public/views/settings', {currMin: filterNum})
});


 app.post('/birds', (req, res) => {
    
    if(birds.hasOwnProperty(req.body.birdName)){
    birds[req.body.birdName]++;
    }else{
    birds[req.body.birdName] = 1;;
    }
    res.redirect('/birds');
 });

 app.post('/settings', (req, res) => {
    
    filterNum = req.body.newMin;
    res.redirect('/settings');
 });

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);