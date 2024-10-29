require("dotenv").config();

const Product=require("./datamodel/product")
const data=require("./product.json")

const express=require ("express");
const app=express();
const products_routes=require("./routes/products")

const mongoose =require('mongoose');

bodyParser=require('body-parser');
const connectToMongo=()=>{
    mongoose.connect(process.env.Mongo_ad).then(()=>{
        console.log("Connected to Mongo Successfull");
    }).catch((error)=>{
        console.log("error",error)
    })
    
}
//module.exports=connectToMongo;
connectToMongo();
 
 Product.create(data);
 Product.deleteMany();



app.get("/",(req,res)=>{
    res.send("Hi i am alive")
})
//middlewares or set routers
app.use("/api/products",products_routes);
const start=async()=>{
    try{
        app.listen(5000,()=>{
            console.log(`yes i am connected`);
        });
    }catch(error)
    {
        console.log(error);
    }
}
start();
