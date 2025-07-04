// controllers/testController.js
import Test from '../models/Test.js';
import Result from '../models/Result.js';

export const createTest = async (req, res) => {
  try {
    const { testName, testDate, questions } = req.body;
    const newTest = new Test({ testName, testDate, questions });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ error: "Failed to create test" });
  }
};

export const getTests = async (req, res) => {
  try {
    const tests = await Test.find().sort({ createdAt: -1 });
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tests" });
  }
};

export const getTestById = async (req, res) => {
  try {
    console.log("📥 Test ID from URL:", req.params.id);
    const test = await Test.findById(req.params.id);
    if (!test) {
      console.log("❌ No test found for this ID");
      return res.status(404).json({ error: "Test not found" });
    }
    res.json(test);
  } catch (err) {
    console.error("❌ Error in getTestById:", err.message);
    res.status(500).json({ error: "Failed to fetch test" });
  }
};


export const submitTest = async (req, res) => {
  try {
    const { testId, answers } = req.body;
    const userId = req.user._id;

    const test = await Test.findById(testId);
    if (!test) return res.status(404).json({ error: "Test not found" });

    let score = 0;

    test.questions.forEach((q) => {
      const userAnswer = answers.find((a) => a.id === q.id);
      if (userAnswer && userAnswer.answer === q.correctAnswer) {
        score++;
      }
    });

    const result = new Result({
      user: userId,
      testName: test.testName,
      testId,
      totalQuestions: test.questions.length,
      score,
      date: new Date()
    });

    await result.save();

    res.json({ message: "Test submitted", score, total: test.questions.length });
  } catch (err) {
    console.error("Test submission error:", err);
    res.status(500).json({ error: "Server error while submitting test" });
  }
};


export const getMyResults = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('Authenticated user ID:', userId); // ✅ Add this log
    const results = await Result.find({ user: userId }).sort({ date: -1 });

    res.json(results);
  } catch (err) {
    console.error("Error fetching results:", err);
    res.status(500).json({ error: "Failed to fetch results" });
  }
};