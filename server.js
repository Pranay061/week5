const express=require('express');
const app=express();
app.use(express.json());

app.get('/',(req,res)=>{
 res.sendFile(__dirname+'/index.html');
});
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
app.get('/success',(req,res)=>{
    res.sendFile(__dirname+'/success.html');
});
app.get('/welcome',(req,res)=>{
    res.sendFile(__dirname+'/welcome.html');
});
app.post('/',(req,res)=>{
    res.redirect('/');
});
app.post('/login',(req,res)=>{
    res.redirect('/login');
});
app.post('/register',(req,res)=>{
    res.redirect('/register');
});
app.post('/success',(req,res)=>{
    res.redirect('/success');
});
app.post('/welcome',(req,res)=>{
    res.redirect('/welcome');
});
app.listen(2357,()=>{
    console.log('our express server is up on port 2357');
});
