import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { submitTestResult, getUserResults } from '../controllers/testController.js';

const router = express.Router();

router.post('/submit', protect, submitTestResult);
router.get('/my-results', protect, getUserResults);

export default router;
