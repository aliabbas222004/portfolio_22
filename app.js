require('dotenv').config();

const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const cookieParser=require('cookie-parser');
const app=express();
const PORT=process.env.PORT || 8000;
const userRoute=require('./routes/user');

app.use((req, res, next) => {
    res.locals.currentPath = req.path; // Add current path to res.locals
    next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));



app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use('/user',userRoute);

app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URL).then((e)=>{
    console.log("Monogodb connected");
});



app.get('/',async (req,res)=>{
    return res.render("home");
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})
