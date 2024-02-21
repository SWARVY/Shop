import { Router } from 'express'
import User from '../models/User'

const router = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/users/register', async (req, res, next) => {
  try {
    const user = new User(req.body)
    await user.save()
    return res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

router.post('/users/login', (req, res) => {})

router.post('/users/auth', (req, res) => {})

export default router
