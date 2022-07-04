import { Schema, model } from 'mongoose'

const schemaUser = new Schema({
    name:String,
    email:String,
    password:String,
    username:String,
    age:Number,
    address:String,
    phone:Number,
    image:String,
})

export const UserModel = model('User', schemaUser)