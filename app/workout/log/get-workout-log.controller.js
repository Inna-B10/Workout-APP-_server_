import asyncHandler from 'express-async-handler'
import { prisma } from '../../prisma.js'
import { calculateMinute } from '../calculate-minute.js'

//@desc   Get workoutLog
//@route  GET /api/workouts/log/:logId
//@access Private

export const getWorkoutLog = asyncHandler(async (req, res) => {
	const workoutLog = await prisma.workoutLog.findUnique({
		where: {
			id: +req.params.id
		},
		include: {
			workout: {
				include: {
					exercises: true
				}
			},
			exerciseLog: {
				orderBy: {
					id: 'asc'
				},
				include: {
					exercise: true
				}
			}
		}
	})

	if (!workoutLog) {
		res.status(404)
		throw new Error('Workout Log not found')
	}

	res.json({
		...workoutLog,
		minute: calculateMinute(workoutLog.workout.exercises.length)
	})
})
