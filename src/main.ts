import express from "express";
import "dotenv/config";
import UserController from "./controllers/User.controller";

const PORT: number = Number(process.env.PORT) || 3939;
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(__dirname + '/public'));


// Pagination
app.get("/",(req, res):void=>{
    res.sendFile(__dirname + "/views/Home.html");
})
app.get("/Home",(req, res):void=>{
    res.sendFile(__dirname +  "/views/Home.html");
})
app.get("/Login",(req, res):void=>{
    res.sendFile(__dirname +  "/views/Login.html");
})
app.get("/Register",(req, res):void=>{
    res.sendFile(__dirname + "/views/Register.html");
})

// Data from form
app.post("/Register", (req, res):void=>{
    try{
        UserController.RegisterNewUser(req.body);
    }
    catch(e){
        console.log(e.message);
    }

    res.status(200);

    
})

try {
    app.listen(PORT, ():void=>{
        console.log(`listening on port: ${PORT}`);
    })
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}