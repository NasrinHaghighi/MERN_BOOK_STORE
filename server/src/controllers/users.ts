import { type } from "os"
import { features } from "process"

const Users =require('../models/users')

export const getAllusers =async (req: any, res: any) =>{
   let result =await req.query
 res.json({result})
}