import { User } from "../models/User"

export const usersRepository = {
    create: async (user) => {
        const response = await User.create(user)
        return response
    },
    getByUsername: async (username) => {
        const response = await User.findOne({username})
        return response
    }
}