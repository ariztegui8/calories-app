import { useMemo } from "react"
import { ActivityForm } from "../type"

type CalorieTrackerProps = {
    activities: ActivityForm[]
}

const CalorieTracker = ({ activities }: CalorieTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total +
        activity.calories : total, 0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total +
        activity.calories : total, 0), [activities])

    return (
        <div className="bg-orange-100 p-6">
            <div className='max-w-2xl mx-auto '>
                <div className="mb-4">
                    <h2 className="text-center font-semibold text-2xl">Resumen de calorias</h2>
                </div>

                <div className="flex justify-between gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg font-semibold">Calorias</p>
                        <p className="text-4xl font-bold text-gray-700">{caloriesConsumed}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg font-semibold">Calorias</p>
                        <p className="text-4xl font-bold text-gray-700">{caloriesBurned}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalorieTracker