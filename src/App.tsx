import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import { formReducer, initialState } from "./reducers/form-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"


const App = () => {

  const [state, dispatch] = useReducer(formReducer, initialState)

  useEffect(()=>{
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  return (
    <div>
      <Navbar
        dispatch={dispatch}
      />
      <Form 
        dispatch={dispatch}
        state={state}
      />

      <CalorieTracker 
        activities={state.activities}
      />
      <ActivityList 
        activities={state.activities}
        dispatch={dispatch}
      />
    </div>
  )
}

export default App