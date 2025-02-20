class ReviewController {
    constructor(Review) {
        this.Review = Review;
    }

    async getReviews(req, res) {
        try {
            const reviews = await this.Review.find();
            res.status(200).json(reviews);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createReview(req, res) {
        const review = new this.Review(req.body);
        try {
            const savedReview = await review.save();
            res.status(201).json(savedReview);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteReview(req, res) {
        try {
            const deletedReview = await this.Review.findByIdAndDelete(req.params.id);
            if (!deletedReview) {
                return res.status(404).json({ message: 'Review not found' });
            }
            res.status(200).json({ message: 'Review deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ReviewController;