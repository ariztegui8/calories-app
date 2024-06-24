import { useMemo } from "react"
import { ActivityForm } from "../type"
import { categories } from "../data/categories"

type ActivityListProps = {
    activities: ActivityForm[]
}
const ActivityList = ({activities} : ActivityListProps) => {

    const categoryName = useMemo(() =>
        (category: ActivityForm['category']) => categories.map(cat => cat.id === category ? cat.name : '' )
    , [activities]
    )

  return (
    <div className='max-w-2xl mx-auto '>
        <h2 className="text-center font-semibold text-2xl mb-10">Comida y Actividads</h2>

        <div>
            {activities.map(activity => (
                <div key={activity.id} className='bg-white border border-gray-100 p-4 rounded-md shadow-md mb-10'>
                    <div className="relative mb-3">
                        <p className={`absolute -top-8  p-1 text-white uppercase text-sm font-semibold ${activity.category === 1 ? 'bg-indigo-500' : 'bg-purple-600'}`}>{categoryName(+activity.category)}</p>
                    </div>
                    <p className="text-lg font-semibold mb-1">{activity.activity}</p>
                    <p className="text-3xl font-bold text-indigo-500">{activity.calories} Calorias</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ActivityList