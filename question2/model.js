const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorksnapsTimeEntry = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  timeEntries: {
    type: Object,
  },
});

const StudentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    default: "",
  },
  lastName: {
    type: String,
    trim: true,
    default: "",
  },
  displayName: {
    type: String,
    trim: true,
    default: "",
  },
  municipality: {
    type: String,
    default: "",
  },
});

const TimeEntry = mongoose.model("TimeEntry", WorksnapsTimeEntry);
const Student = mongoose.model("Student", StudentSchema);

module.exports = { TimeEntry, Student };
