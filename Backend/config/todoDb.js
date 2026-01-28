import mongoose from "mongoose";


const connectDB=async ()=>{
   mongoose.connect('mongodb://127.0.0.1:27017/Todo-App')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB error:', err));

}

export default connectDB;
   
