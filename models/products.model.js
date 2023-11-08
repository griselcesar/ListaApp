import {Schema, model} from 'mongoose'

const productSchema = new Schema({
  code:{type:String,required:true, unique:true},
  brand:{type:String,required:true},
  model:{type:String,required:true},
  description:{type:String,required:true},
  category:{type:String,required:true},
  sell:{type:Number,default:0},
  buy:{type:Number,default:0},
  stock:{type:Number,default:0},
})

export default model('product',productSchema)