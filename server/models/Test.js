// models/Test.js
import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  correctAnswer: String
});

const testSchema = new mongoose.Schema({
  testName: String,
  testDate: String,
  questions: [questionSchema]
}, { timestamps: true });

export default mongoose.model("Test", testSchema);
