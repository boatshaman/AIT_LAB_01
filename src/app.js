const http = require('http');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('view options', { layout: '../public/views/layout.hbs' });
app.use(express.urlencoded({extended:false}));

const birds = {"Bald Eagle":3,"Yellow Billed Duck":7,"Great Cormorant":4};
const filterNum = 0


app.get('/', (req, res) => {
    res.render('../public/views/home',{});
 });

//  app.get('/birds', (req, res) => {
//      // name for the page 
//     let content;
//     if(req.ruery){
//         content = birdsdic;
//     }else{
//         let newdic = {birds:{}};
//         for(let i in birdsdic){
//             if(birdsdic[i] >= filterNum){
//                 newdic.birds[i] = birdsdic.birds[i];
//             }
//         }
//         content = newdic;
//     }
//     res.render('home',content);
//  });

// app.get('/settings', (req, res) => {
//     if(req.query.hasOwnProperty('mininum')){
//     };
// });


//  app.post('/', (req, res) => {
//     res.send(req.body);
//     pets.push(req.body.name);
//     res.redirect('/');
//  });

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);