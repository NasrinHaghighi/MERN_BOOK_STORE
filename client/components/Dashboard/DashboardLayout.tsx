import React from 'react'
import DashboardHeader from './DashboardHeader/DashboardHeader';
import SidebarDashboard from './SidebarDashboard/SidebarDashboard';
import {Box} from './styles'

interface LayoutProps {
    children: React.ReactNode;
  }


const  DashboardLayout: React.FC<LayoutProps> =(props) =>{
  return (
    <>
    <DashboardHeader />
   
    <Box>
    <SidebarDashboard />
   <main className="sections-wrapper-landing">
    {props.children}
    
    </main> 
    </Box>
       </>
  )
}

export default DashboardLayout