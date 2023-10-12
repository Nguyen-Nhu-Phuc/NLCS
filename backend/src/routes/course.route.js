import express from 'express';
import CourseController from '../controllers/course.controller.js';
import middlewareController from '../controllers/middleware.controller.js';



const router = express.Router();

router.post('/createcourse', CourseController.createCourse)
router.post('/', CourseController.addCourse);
router.put('/editcourse', CourseController.editCourse);
router.delete('/:id', CourseController.deleteCourse);
router.get('/stored', CourseController.getAllCourse);
router.get('/:id', CourseController.getCourse);

export default router;
