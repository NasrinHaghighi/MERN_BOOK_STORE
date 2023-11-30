import { type } from "os"
import { features } from "process"

const Users =require('../models/users')

export const getAllusers =async (req: any, res: any) =>{
  try {
    
    const users = await Users.find();
//console.log(users)
    // Return the list of users as JSON
    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const createUserCard =async (req: any, res: any) =>{
 
}