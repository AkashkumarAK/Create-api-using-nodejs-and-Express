const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        default:false,

    },
    rating:{
        type:Number,
        defaut:4.9
    },
    // createdate:{
    //     type:Date,
    //     defaut:Date.now(),
    // },
    company:{
        type:String,
        enum:{
            values:["apple","samsung","dell","mi"],
            message:`{VALUE} is not supported`
        }

    }
    
},{timestamps:true})
const user=mongoose.model('akash',ProductSchema)
module.exports=user