const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune,} = require('./controller')



//EndPoints-------------------------------------------------

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", function(req, res){
    const fortune = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.","A fresh start will put you on your way.", "A friend asks only for your time not your money."]

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];
  
    res.status(200).send(randomFortune);

})

//part two---------------------------------------
app.get("/api/cat", function(req, res){
    const cats = [
            { name: 'cat 1', 
            image: 'https://static5.depositphotos.com/1000270/486/i/600/depositphotos_4869272-stock-photo-bengal-cat-light-brown-cream.jpg'}, { 
            name: 'cat 2', 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43LsWRQEgMs7mg1cFlu6lAXk4tqVyOksjrSRTw3Yy&s'}, 
    ]
   
    // choose random cat
    let randomIndex = Math.floor(Math.random() * cats.length);
    let randomCat = cats[randomIndex];
  
    res.status(200).send(randomCat);

})























app.listen(4000, () => console.log("Server running on 4000"));
