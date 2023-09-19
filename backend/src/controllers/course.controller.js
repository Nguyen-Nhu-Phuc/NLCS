import Course from '../models/courses.js';

const CourseController = {
    // [POST] /api/course
    addCourse: async(req, res) => {
        try {
            const newCourse = new Course(req.body);
            const saveCourse = await newCourse.save();
            res.status(201).json(saveCourse);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [PUT] /api/course
    editCourse: async(req, res) => {
        const {id, name, description, image} = req.body;
        try {
            const course = await Course.findOneAndUpdate({
                _id: id
            }, {name, description, image}, {new: true});
            res.status(200).json(course);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [DELETE] /api/course/:id
    deleteCourse: async(req, res) => {
        const {id} = req.body;
        try {
            const course = await Course.findByIdAndDelete(id);
            res.status(200).json(course);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    //[GET] /api/cousre/stored
    getAllCourse: async(req, res) => {
        try{
            const all = await Course.find({});
            return res.status(200).json(all);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    //[GET] /api/course/:id
    getCourse: async(req, res) => {
        try {
            const course = await Course.findById(req.params.id);
            return res.status(200).json(course);
        }catch(err) {
            res.status(500).json(err);
        }
    },

    // [POST] /api/course/createcourse
    async createCourse(req, res) {
        const { name, description, image} = req.body;
        console.log(req.body);
        try {
            const newCourse = new Course({
                name: name,
                description: description,
                image: image,
            })
            const user = await newCourse.save();
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json('Something wrong!')
        }
    },
};

export default CourseController;