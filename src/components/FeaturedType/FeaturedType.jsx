import axios from 'axios'
import React,{useState,useEffect} from 'react'

function FeaturedType() {
    const[typeCounts,setTypeCounts]=useState([])
    useEffect(()=>{
        const fetch=async(req,res)=>{
        try {
            const response=await axios(`http://localhost:9090/api/v1/hotel/countByType`)
            setTypeCounts(response.data)
        } catch (error) {
            console.error('Error fetching hotel type counts:', error);

        }
        }
        fetch()
    },[])
  return (
    <div> <div>
    <h1>Hotel Counts by Type</h1>
    <ul>
      {typeCounts.map((count, index) => (
        <li key={index}>
          Type: {count.type}, Count: {count.count} hotels
        </li>
      ))}
    </ul>
  </div></div>
  )
}

export default FeaturedType