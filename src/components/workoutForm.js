import React ,{useState}from 'react'
import { useWorkoutHereContext } from '../hooks/useWorkoutHereContext'

const WorkoutForm=() =>{
    const{dispatch}=useWorkoutHereContext()
    const [title,setTitle]=useState('')
    const[load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    const[error,setError]=useState(null)
    const [emptyFields,setEmptyFields]=useState([])
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const workout={title,load,reps}
        const response=await fetch('http://localhost:9090/api/v1/workout',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json()
        const info=data.workout
        console.log(info)
        if(!response.ok){
            setError(data.error)
            setEmptyFields(data.emptyFields)
            console.log(data.error)
            console.log(data.emptyFields)
        }
        if(response.ok){
            setEmptyFields([])

            setError(null)
            setTitle('')
            setReps('')
            setLoad('')
            console.log('new workout addded',info)
            dispatch({type:"CREATE_WORKOUT",payload:info})
        }
    }
  return (
<form className='create' onSubmit={handleSubmit}>
    <h3>Add a New Workout    </h3>

        <label> Exercise Title</label>
        <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)}
        className={emptyFields.includes('title') ? 'error':''}/>
        <label> Laod (in kg)</label>
        <input type='text' value={load} onChange={(e)=> setLoad(e.target.value)}
          className={emptyFields.includes('load') ? 'error':''}/>
        <label> Number of reps(sets)</label>
        <input type='text' value={reps} onChange={(e)=> setReps(e.target.value)}
          className={emptyFields.includes('reps') ? 'error':''}/>
        <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
</form>  )
}

export default WorkoutForm