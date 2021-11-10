import Router from 'express'
import User from "./user.js";
import UserController from "./UserController.js";


const router = new Router();

router.post('/users', UserController.create)
router.get('/users', UserController.getAll)
router.get('/users/:id',UserController.getByID )
router.put('/users',UserController.update)
router.delete('/users/:id', UserController.delete)
router.post('/message/send',UserController.send )

export default router