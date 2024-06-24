import { ActivityForm } from "../type"

export type FormActions = {
    type: 'save_activity',
    payload: {newActivity: ActivityForm}
}

type FormState = {
    activities: ActivityForm[]
}

export const initialState : FormState = {
    activities: []
}

export const formReducer = (
    state: FormState = initialState,
    action: FormActions
)=>{

   if(action.type === 'save_activity'){
    return {
        ...state,
        activities: [...state.activities, action.payload.newActivity]
    }
    
   }

   return state
}