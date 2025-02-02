const reviewsData = [
    { id: 1, author: 'John Doe', content: 'Great product!' },
    { id: 2, author: 'Jane Smith', content: 'Very useful and well made.' },
    { id: 3, author: 'Alice Johnson', content: 'Exceeded my expectations.' },
    { id: 4, author: 'Bob Brown', content: 'Would definitely recommend.' }
];

const Reviews = () => {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <div className="review-cards">
            {reviewsData.map(review => (
                <div key={review.id} className="review">
                    <h2>{review.author}</h2>
                    <p>{review.content}</p>
                </div>
            ))}
            </div>
            <button className="left-button">Left</button>
            <button className="right-button">Right</button>
        </div>
    );
};

export default Reviews;