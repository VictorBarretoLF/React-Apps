const asyncHandler = require("express-async-handler")

const User = require('../model/userModel')
const Goal = require('../model/goalsModel')

// %desc Get goals
// route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (request, response) => {
    const goals = await Goal.find({ user : request.user.id })

    response.status(200).json(goals)
})

// %desc Set goal
// route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error("Please add a text field")
    }
    
    const goal = await Goal.create({
        text : request.body.text,
        user : request.user.id
    })

    return response.status(200).json(goal)
})

// %desc Update goal
// route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (request, response) => {

    const goal = await Goal.findById(request.params.id)

    if (!goal){
        response.status(400)
        throw new Error("Goal not found")
    }

    const user = await User.findById(request.user.id)

    // Check for user
    if (!user){
        response.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id){
        response.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(request.params.id, request.body, {new : true})

    return response.status(200).json(updatedGoal)
})

// %desc Delete goal
// route Delete /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (request, response) => {

    const goal = await Goal.findById(request.params.id)

    if (!goal){
        response.status(400)
        throw new Error("Goal not found")
    }

    await Goal.findByIdAndDelete(request.params.id)

    response.status(200).json({ id : request.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}