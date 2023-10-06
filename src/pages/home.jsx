import React from 'react'
// import { useState } from 'react'
import { useEffect } from 'react'
import WorkoutForm from '../components/workoutForm'
import WorkoutDetail from '../components/WorkoutDetail'
import { useWorkoutHereContext } from '../hooks/useWorkoutHereContext'

function Home() {
    // const [workouts,setWorkouts]=useState(null)
    const {workouts,dispatch}=useWorkoutHereContext()
    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:9090/api/v1/workout')
            const json = await response.json()
      
            if (response.ok) {
            //   setWorkouts(json)
            dispatch({type:'SET_WORKOUTS',payload:json})
            }
          }
      
          fetchWorkouts()
        }, [dispatch])
  return (
<div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetail workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>  )
}

export default Home