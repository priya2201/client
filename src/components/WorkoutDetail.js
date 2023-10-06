import { useWorkoutHereContext } from "../hooks/useWorkoutHereContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetail = ({ workout }) => {
    const {dispatch}=useWorkoutHereContext()
const handleClick=async()=>{
    const response=await fetch(`http://localhost:9090/api/v1/workout/${workout._id}`,{
        method:'DELETE',
        headers:{
        'Content-Type':'application/json',
        'Cache-Control': 'no-cache', 
        }

    })
    const data=await response.json()
    console.log(data)
    if(response.ok){
dispatch({type:'DELETE_WORKOUT',payload:data})
    }
}

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
      </div>
    )
  
}
  export default WorkoutDetail