import express from 'express';
import ReviewController from '../controllers/reviewController.mjs';

const router = express.Router();
const reviewController = new ReviewController();

router.get('/reviews', reviewController.getReviews);
router.post('/reviews', reviewController.createReview);
router.delete('/reviews/:id', reviewController.deleteReview);

export default router;