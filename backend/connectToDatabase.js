import mongoose from "mongoose"
import dotenv from 'dotenv'; 
dotenv.config();

const connectToDataBase = async ()=>{
    try {
        const connection = await mongoose.connect("mongodb+srv://imgauravkumar7:Myfir$tlove123@cluster1.nsxcyh4.mongodb.net/")
        if(connection){
            console.log("connected to DataBase")
        }
    } catch (error) {
        console.log("error in connectToDatabase", error)
        throw error
    }
}

export default connectToDataBase;