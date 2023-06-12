const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/db";

const { TimeEntry, Student } = require("./model");

const connect = mongoose.connect(url);

connect
  .then((db) => {
    console.log("Connected to mongodb server");

    Student.create({
      firstName: "John",
      lastName: "Doe",
      displayName: "John",
    })
      .then((student) => {
        return TimeEntry.create({
          student: student._id,
        });
      })
      .then(() => {
        return Student.aggregate([
          {
            $lookup: {
              from: "timeentries",
              localField: "_id",
              foreignField: "student",
              as: "timeEntry",
            },
          },
          {
            $set: {
              timeEntry: { $arrayElemAt: ["$timeEntry", 0] },
            },
          },
        ]).exec();
      })
      .then((data) => {
        console.log(JSON.stringify(data));
        return mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
