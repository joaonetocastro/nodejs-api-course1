import Crypto from 'crypto'

const users = [
    {
        id: '1',
        username: 'admin',
        password: 'admin'
    }
]

export const usersRepository = {
    create: (user) => {
        const id = Crypto.randomUUID()
        const createdUser = {
            id, 
            ...user
        }

        users.push(createdUser)
        return createdUser
    },
    getByUsername: (username) => {
        return users.find(user => user.username === username) || null
    }
}