import { useEffect, useState } from 'react'
import { categories } from '../data/categories'
import { ActivityForm } from '../type'
import { FormActions, FormState } from '../reducers/form-reducer'
import {v4 as uuidv4} from 'uuid'

type FormProps = {
    dispatch: React.Dispatch<FormActions>
    state: FormState
}

const Form = ({dispatch, state}: FormProps) => {

    const [form, setForm] = useState<ActivityForm>({
        id: uuidv4(),
        category: 1,
        activity: '',
        calories: 0
    })

    useEffect(()=>{
        if(state.activeId){
          const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
          setForm(selectedActivity)
            
        }
    }, [state.activeId])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>)=>{
        const isNumberField = ['category', 'calories'].includes(e.target.id)
        
        setForm({
            ...form,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch({
            type: 'save_activity',
            payload: {newActivity: form}
        })

        setForm({
            id: uuidv4(),
            category: 1,
            activity: '',
            calories: 0
        })
    }

    const isValidForm = () => {
        const {activity, calories} = form
        return activity.trim() !== '' && calories > 0
    }

    return (
        <div className='bg-indigo-300 p-10'>
            <form onSubmit={handleSubmit} className='max-w-2xl mx-auto '>
                <div className='space-y-2 mb-2'>
                    <label className='text-lg' htmlFor="category">Categoría:</label>
                    <select
                        className='border border-slate-300 p-2 rounded-md w-full bg-white outline-indigo-600'
                        id='category'
                        onChange={handleChange}
                        value={form.category}
                    >
                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2  mb-2'>
                    <label className='text-lg' htmlFor="activity">Actividad:</label>
                    <input
                        type="text"
                        id='activity'
                        onChange={handleChange}
                        value={form.activity}
                        className='border border-slate-300 p-2 rounded-md w-full outline-indigo-600'
                        placeholder='Ej. Comida, Ejercicio, etc.'
                    />
                </div>

                <div className='space-y-2  mb-6'>
                    <label className='text-lg' htmlFor="calories">Calorias:</label>
                    <input
                        type="number"
                        id='calories'
                        onChange={handleChange}
                        value={form.calories}
                        className='border border-slate-300 p-2 rounded-md w-full outline-indigo-600'
                        placeholder='Calorias consumidas ej. 200'
                    />
                </div>

                <div className='space-y-2 '>
                    <button
                        className='bg-indigo-500 text-white p-2 rounded-md w-full disabled:opacity-20 disabled:cursor-not-allowed disabled:bg-gray-600'
                        type='submit'
                        disabled={!isValidForm()}
                    >
                        {form.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}</button>
                </div>
            </form>
        </div>
    )

}

export default Form