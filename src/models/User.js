import mongoose from 'mongoose'

export const User = mongoose.model('User', mongoose.Schema({
    username: String,
    password: String,
}))