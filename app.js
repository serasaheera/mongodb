const express=require('express');
const chalk=require('chalk');
var app=new express();//object creation
const booksRouter=express.Router();

const path=require('path');
app.set('views','./src/views');//views-keyword
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"/public")))

booksRouter.route('/').get((req,res)=>{
    res.render('books',{nav:[
        {link:'/book',title:'Books'},{link:'/auther',title:'auther'}],title:"BOOKS"});
});
booksRouter.route('/single')
 .get((req,res)=>{
     res.send("Hello single Book");
 });



app.use('/books',booksRouter);




app.get('/',function(req,res){
    res.render('index',
    {
        nav:[
    {link:'/books',title:'Books'},
    {link:'/authors',title:"Authors"}
],
title:"Library"
});
});



app.listen(3000, function(){
    console.log('listening to port'+chalk.green('3000'))
});