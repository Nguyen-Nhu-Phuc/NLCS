import Lesson from '../models/lesson.js';

const LessonController = {
    // [POST] /api/lesson
    addLesson: async(req, res) => {
        try {
            const newLesson = new Lesson(req.body);
            const saveLesson = await newLesson.save();
            res.status(201).json(saveLesson);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [PUT] /api/lesson
    editLesson: async(req, res) => {
        const {id, name, description, image} = req.body;
        try {
            const lesson = await Lesson.findOneAndUpdate({
                _id: id
            }, {name, description, image}, {new: true});
            res.status(200).json(lesson);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [DELETE] /api/lesson/:id
    deleteLesson: async(req, res) => {
        try {
            const lesson = await Lesson.findByIdAndDelete(req.params.id);
            res.status(200).json(lesson);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    //[GET] /api/cousre/stored
    getAllLesson: async(req, res) => {
        try{
            const all = await Lesson.find({});
            return res.status(200).json(all);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    //[GET] /api/lesson/:id
    getLesson: async(req, res) => {
        try {
            const lesson = await Lesson.findById(req.params.id);
            return res.status(200).json(lesson);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [POST] /api/lesson/createlesson
    async createLesson(req, res) {
        const { name, description, image} = req.body;
        try {
            const newLesson = new Lesson({
                name: name,
                description: description,
                image: image,
            })
            const user = await newLesson.save();
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json('Something wrong!')
        }
    },
};

export default LessonController;