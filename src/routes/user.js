import { Router } from 'express'
import userController  from './../controller/userController'

const router = Router()

router.get('/', userController.list)
router.get('/:id', userController.details)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.deleteData)
export default router