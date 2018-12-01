import { Schema, model } from 'mongoose'


const UserSchema = new Schema({
    first_name : {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        require: true
    }
},
{
    timestamps: true
})


const UserModel = model('users', UserSchema)

export default UserModel