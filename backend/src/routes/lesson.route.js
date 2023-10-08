import express from 'express';
import LessonController from '../controllers/lesson.controller.js';


const router = express.Router();

router.post('/createLesson', LessonController.createLesson)
router.post('/', LessonController.addLesson);
router.put('/editLesson', LessonController.editLesson);
router.delete('/:id', LessonController.deleteLesson);
router.get('/stored',LessonController.getAllLesson);
router.get('/:id', LessonController.getLesson);

export default router;
