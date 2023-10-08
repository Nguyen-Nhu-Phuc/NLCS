import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
    name: {
        type: String
    },

    description: {
        type: String
    },

    video: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    { collection: 'Lesson' })

const LessonModel = mongoose.model('Lesson', LessonSchema);

export default LessonModel;