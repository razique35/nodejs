import { Router } from 'express';
import StudentController from '../controllers/studentController';

const router = Router();
const studentController = new StudentController();

router.post('/students', studentController.createStudent.bind(studentController));
router.get('/students/:rollNumber', studentController.getStudent.bind(studentController));
router.put('/students/:rollNumber', studentController.updateStudent.bind(studentController));
router.delete('/students/:rollNumber', studentController.deleteStudent.bind(studentController));

export default router;