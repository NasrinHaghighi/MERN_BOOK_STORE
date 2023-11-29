




export interface bookType{
book(book: any): unknown
_id:string,
imageUrl:string,
name:string,
author:string,
price:number,
description:string,
format:string,
rating:number
amount:number, 
stock?:string,
discont:number,
finalprice:number
}