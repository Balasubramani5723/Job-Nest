import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        true:String
    },
    website:{
        true:String
    },
    location:{
        true:String
    },
    logo:{
        true:String //URL to company logo
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
}, {timestamps:true});
export const Company = mongoose.model("Company", companySchema);