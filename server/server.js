import mongoose from 'mongoose';
import express from 'express';
import Router from "./Router.js";
import  path from "path";
const DB_URL = "mongodb+srv://me:liverpool2021@cluster0.cubom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const __dirname = path.resolve();
const server = express()

server.use(express.json())

server.use('/css', express.static('./css'));
server.use('/js', express.static('./js/'));
server.use('/api',Router)

server.listen(8888)
await mongoose.connect(DB_URL);

server.get('/', function(req, res){
    res.sendFile(__dirname+"/menu.html");
});





