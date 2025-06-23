import { TestResult } from '../models/testResultModel.js';

export const submitTestResult = async (req, res) => {
  try {
    const { testName, score, totalQuestions } = req.body;
    const userId = req.user._id;

    const newResult = new TestResult({
      user: userId,
      testName,
      score,
      totalQuestions,
    });

    const savedResult = await newResult.save();
    res.status(201).json(savedResult);
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit test result', error });
  }
};

export const getUserResults = async (req, res) => {
  try {
    const userId = req.user._id;
    const results = await TestResult.find({ user: userId }).sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch test results', error });
  }
};
