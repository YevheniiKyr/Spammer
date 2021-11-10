import mongoose from "mongoose";
const User = new mongoose.Schema ({
    surname: {type:String , required: true},
    name: {type:String , required: true},
    mail: {type:String , required: true}

})
export default mongoose.model('User', User)