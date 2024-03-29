
import React,{useState} from 'react'
import Description from '../Description/Description'
import {Conatiner, Tabs, Tab, Content, InnerContent} from './styles'


import { bookType } from '../../../types/bookType'


interface ItemProps{
  item?:bookType
}

const tabs=[
    {tit:'Description', value:'description'},
    {tit:'Book specific', value:'specific'},
    {tit:'Authors', value:'authors'},
    {tit:'Comments', value:'comments'},
]
function BookAllInfo({item}:ItemProps) {
    const [activeTab, setActiveTab] =useState<string>('description')
    const handelActive=(value:string)=>{
      return setActiveTab(value)
    }

    const showTabs=(r:string)=>{
      switch (r) {
        case 'description':
         return <Description item={item}/>  
      
         case 'authors':
         return <p>xxxxxxxx</p>   
        default:
          
          break;
      }
    }
  return (
    <Conatiner>
        <Tabs>
           {tabs.map((item, i)=>{
            return <Tab key={i} 
            onClick={()=>handelActive(item.value)} 
            className={ activeTab === item.value ? 'active': ''}>HHHHHH</Tab>
           })}
        </Tabs>
        <Content>
          <InnerContent>
             {showTabs(activeTab)}
          </InnerContent>
        </Content>
    </Conatiner>
  )
}

export default BookAllInfo