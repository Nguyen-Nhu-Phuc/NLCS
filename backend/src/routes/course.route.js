import express from 'express';
import CourseController from '../controllers/course.controller.js';


const router = express.Router();

router.post('/createcourse', CourseController.createCourse)
router.post('/', CourseController.addCourse);
router.put('/editcourse', CourseController.editCourse);
router.delete('/', CourseController.deleteCourse);
router.get('/stored',CourseController.getAllCourse);
router.get('/:id', CourseController.getCourse);

export default router;
