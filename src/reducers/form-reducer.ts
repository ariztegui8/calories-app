import { ActivityForm } from "../type"

export type FormActions = {
    type: 'save_activity',
    payload: { newActivity: ActivityForm }
} |
{
    type: 'set_activeId',
    payload: { id: ActivityForm['id'] }
} |
{
    type: 'delete_activity',
    payload: { id: ActivityForm['id'] }
} |
{
    type: 'restart_form',
}

export type FormState = {
    activities: ActivityForm[],
    activeId: ActivityForm['id']
}

const localStorageActivities = ()  => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []

}

export const initialState: FormState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const formReducer = (
    state: FormState = initialState,
    action: FormActions
) => {

    if (action.type === 'save_activity') {
        let updatedActivities: ActivityForm[] = []
        if (state.activeId) {
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }

    }

    if (action.type === 'set_activeId') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    if (action.type === 'delete_activity') {
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    if (action.type === 'restart_form') {
        return {
            activities: [],
            activeId: ''
        }
    }

    return state
}