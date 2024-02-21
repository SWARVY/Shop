import mongoose, { Schema } from 'mongoose'

interface UserInterface {
  name: string
  email: string
  password: string
  role: number
  image: string
}

const userSchema = new Schema<UserInterface>({
  name: {
    type: String,
    maxLength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
})

const User = mongoose.model('User', userSchema)

export default User
