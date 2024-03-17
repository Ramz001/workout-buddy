import WorkoutEditPopup from '../WorkoutEditPopup/WorkoutEditPopup'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteWorkout,
  togglePopup,
} from '../../features/workouts/workoutsSlice'

const WorkoutDetails = ({ workout }) => {
  const { title, repetitions, load, sets, duration, createdAt, _id } = workout
  const dispatch = useDispatch()
  const { user, isSignedIn } = useSelector((store) => store.user)

  const handleDeleteBtn = async () => {
    if (!isSignedIn) {
      return alert('Please sign in to delete a workout')
    }

    const response = await fetch('https://workout-buddy-self.vercel.app/api/workouts/' + _id, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
    const data = await response.json()

    if (!response.ok) {
      throw Error('Cannot delete a workout')
    }
    if (response.ok) {
      dispatch(deleteWorkout(data))
    }
  }

  const handleEditBtn = () => {
    dispatch(togglePopup())
  }
  let hours = new Date(createdAt).toISOString().split('T')[1].slice(0, 5)
  let date = new Date(createdAt).toISOString().split('T')[0]

  console.log(date, hours)

  return (
    <div
      className="flex h-fit items-start justify-between rounded-xl bg-slate-100 px-4 py-6 
      text-lg text-gray-900 shadow-xl sm:px-8 md:min-w-96 
      2xl:px-10 dark:bg-slate-900 dark:text-slate-200"
    >
      <div className="flex flex-col items-start justify-start gap-1">
        <h4 className="mb-2 text-lg font-bold tracking-wide text-green-600 md:text-xl">
          {title}
        </h4>
        {load !== 0 && load && (
          <p className="text-sm sm:text-base">
            <span className="bold">Load: </span>
            {load} kgs
          </p>
        )}
        <p className="text-sm sm:text-base">
          <span className="font-bold">Sets: </span> {sets}
        </p>
        <p className="text-sm sm:text-base">
          <span className="font-bold">Reps: </span> {repetitions}
        </p>

        {duration !== 0 && duration && (
          <p className="text-sm sm:text-base">
            <span className="font-bold">Duration: </span> {duration} seconds
          </p>
        )}
        <p className="text-sm sm:text-base">
          <span className="font-bold">Date: </span>
          {hours}, {date}
        </p>
      </div>
      <div className="flex flex-col gap-4 self-center font-bold sm:self-start">
        <button
          className="material-symbols-outlined rounded-lg border border-red-600 px-3 py-1 
          text-base text-red-600 hover:bg-red-600 hover:text-slate-100"
          onClick={handleDeleteBtn}
        >
          Delete
        </button>
        <button
          className="material-symbols-outlined rounded-lg border border-green-600 px-3 py-1 
          text-base text-green-600 hover:bg-green-600 hover:text-slate-100"
          onClick={handleEditBtn}
        >
          edit
        </button>
      </div>
      <WorkoutEditPopup workout={workout} />
    </div>
  )
}

export default WorkoutDetails
