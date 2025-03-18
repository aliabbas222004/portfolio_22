const express=require('express');
const router=express.Router();
const fs=require('fs');
const path=require('path');
const User=require('../models/userContacting');

router.get('/home',(req,res)=>{
    return res.render("home");
});

router.get('/journey',(req,res)=>{
    return res.render("journey");
});

router.get('/about',(req,res)=>{
    return res.render("about");
});

router.get('/resume',(req,res)=>{
    return res.render("resume");
});

router.get('/projects',(req,res)=>{
    return res.render("projects");
});

router.get('/contact',(req,res)=>{
    return res.render("contact");
});


router.post('/addUserContactMessage',async (req,res)=>{
    const { n1, email, subject, message } = req.body;

    try {
        await User.create({
            name: n1,
            email,
            subject,
            description: message,
        });
        return res.redirect("/?success=true");
    } catch (error) {
        console.error("Error saving message:", error);
        return res.redirect("/?error=true");
    }
});




module.exports=router;