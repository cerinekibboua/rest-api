
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentSchema = new Schema ({
    name: {
        type: String,
    },
    roll: {
        type: String,
    },
    present: {
        type: Boolean,
        default: true
    }
});
const Student = Mongoose.model('student',StudentSchema);
module.exports = Student;