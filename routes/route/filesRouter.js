const express = require('express');
const filesRouter = express.Router();
const path = require("path");

// implicitly telling use the router file for the below route
filesRouter.get(`^/$|/index(.html)?`,(req,res)=>{
    res.sendFile(path.join(__dirname,"../..","views","index.html"));
});

filesRouter.get(`^/about(.html)?`,(req,res)=>{
    res.sendFile(path.join(__dirname,"../..","views","about.html"));
});

module.exports = filesRouter;
