import { type } from "os"
import { features } from "process"

//const Users =require('../models/users')

export const dashboard =async (req: any, res: any) =>{
 res.json({
    pedro:100,
    ali:50
 })
}