import { useReducer } from "react"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import { formReducer, initialState } from "./reducers/form-reducer"
import ActivityList from "./components/ActivityList"


const App = () => {

  const [state, dispatch] = useReducer(formReducer, initialState)

  return (
    <div>
      <Navbar />
      <Form 
        dispatch={dispatch}
      />
      <ActivityList 
        activities={state.activities}
      />
    </div>
  )
}

export default App