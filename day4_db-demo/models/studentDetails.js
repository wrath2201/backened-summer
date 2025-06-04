const mongoose = require('mongoose');

const studentDetail = new mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        min: 0
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    enrollmentNumber: {
        type: String,
        required: true,
        unique: true
    },
    course: {
        type: String,
        required: true
    },
    yearOfStudy: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    isActive: {
        type: Boolean,
        default: true
    },

})


const Student = mongoose.model('Student', studentDetail);

module.exports = Student;