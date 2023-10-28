const express = require("express");
const router = express.Router();

router
//TODO:is ne is tarah route q nh diya?
//.route() naya tareeqa hai we will adopt it
.post("/register",(req,res)=>{
    res.json({message: "Register the user"})
});

router
.post("/login",(req,res)=>{
    res.json({message: "login user"})
});

router
.get("/current",(req,res=>{
    res.json({message: "current user information"})
}))
