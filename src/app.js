const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=8000;

//retrive pages of public folder
const setPath=path.join(__dirname,'../public');
const template=path.join(__dirname,'../templates/views');
const partials=path.join(__dirname,'../templates/partials');



//midelware use for get a static website

app.set('view engine', 'hbs');
app.set('views',template);
hbs.registerPartials(partials);

app.use(express.static(setPath));


app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log("port run");
})
