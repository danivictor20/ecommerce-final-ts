import { Schema, model } from 'mongoose'

const schemaProduct = new Schema({
    timestamp:Date,
    name:String,
    description:String,
    code:Number,
    image:String,
    price:Number,
    stock:Number,
})

export const ProductModel = model('Products', schemaProduct)