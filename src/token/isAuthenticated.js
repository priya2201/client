import React from 'react'

export const isAuthenticated=()=> {
    const token=localStorage.getItem('access_token')
    console.log(token)
    return !!token
  
}

