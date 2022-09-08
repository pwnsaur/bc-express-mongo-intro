import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
} from '../controler/userControler.js';

const router = express.Router();

router.post('/create', createUser);
router.get('/get', getAllUsers);
router.get('/get/:id', getUserById);
router.delete('/delete/:id', deleteUserById);
router.put('/update/:id', updateUser);

export default router;
