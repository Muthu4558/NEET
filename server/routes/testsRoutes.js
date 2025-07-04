import express from 'express';
import { createTest, getTests, getTestById, submitTest, getMyResults, } from '../controllers/testsController.js';
import {protect} from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/create', createTest); // Admin-only
router.get('/', getTests);
router.get('/my-results', protect, getMyResults);
router.get('/:id', getTestById);
router.post('/submit', protect, submitTest);

export default router;