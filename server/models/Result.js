import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: { type: mongoose.Schema.Types.ObjectId, ref: 'Test' },
  testName: String,
  score: Number,
  totalQuestions: Number,
  date: { type: Date, default: Date.now }
});

    
export default mongoose.model('Result', resultSchema);