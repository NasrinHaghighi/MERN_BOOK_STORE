import React from 'react'
import { useRouter } from 'next/router'

interface Props{
allowedRoles:any,
children:any
}

function ProtectedRout({ allowedRoles, children }:Props) {
  const router = useRouter();
  if (!allowedRoles?.includes('admin')) {
    //     // Redirect to a different page or show an access denied message
      
     return null;
  }
  
    return children;

}
export default ProtectedRout