import React from 'react'
import jwtDecode from 'jwt-decode'
export const isAdmin=()=> {
    const token=localStorage.getItem('access_token')
     if(token){
        const decodedToken=jwtDecode(token)
        return decodedToken.isAdmin || false
     }
  return false
}

