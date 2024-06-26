import { useMemo } from "react"
import { ActivityForm } from "../type"
import { categories } from "../data/categories"
import { FaRegEdit } from "react-icons/fa";
import { FormActions } from "../reducers/form-reducer";
import { MdDeleteOutline } from "react-icons/md";

type ActivityListProps = {
    activities: ActivityForm[];
    dispatch: React.Dispatch<FormActions>
}
const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

    const categoryName = useMemo(() =>
        (category: ActivityForm['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [activities]
    )

    return (
        <div className='max-w-2xl mx-auto '>
            <h2 className="text-center font-semibold text-2xl mt-10 mb-10">Comida y Actividades</h2>

            <div>
                {activities.map(activity => (
                    <div key={activity.id} className='bg-white border border-gray-100 p-4 rounded-md shadow-md mb-10 flex justify-between items-center'>
                        <div className="relative mb-3">
                            <div className="absolute -top-8">
                                <p className={`  p-1 text-white uppercase text-sm font-semibold ${activity.category === 1 ? 'bg-indigo-500' : 'bg-purple-600'}`}>{categoryName(+activity.category)}</p>
                            </div>
                            <p className="text-lg font-semibold mb-1">{activity.activity}</p>
                            <p className="text-3xl font-bold text-indigo-500">{activity.calories} Calorias</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div onClick={() => dispatch({ type: 'set_activeId', payload: { id: activity.id } })}>
                                <FaRegEdit
                                    color="gray"
                                    size={22}
                                    className="cursor-pointer"
                                />
                            </div>
                            <div onClick={() => dispatch({ type: 'delete_activity', payload: { id: activity.id } })}>
                                <MdDeleteOutline 
                                    color="rgb(248 113 113)"
                                    size={24}
                                    className="cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityList