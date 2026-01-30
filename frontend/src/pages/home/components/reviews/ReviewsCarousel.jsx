import { useEffect, useState } from "react";
import { reviews } from "./reviews";
import "./ReviewsCarousel.css";

const ReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const diff = index - activeIndex;

    if (diff === 0) return "active";
    if (diff === -1 || diff === reviews.length - 1) return "left";
    if (diff === 1 || diff === -(reviews.length - 1)) return "right";

    return "hidden";
  };

  return (
    <section className="reviews-section">
      <h6>AVALIAÇÕES</h6>
      <h2>O que dizem nossos clientes</h2>

      <div className="reviews-carousel">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`review-card ${getPosition(index)}`}
          >
            <div className="review-header">
              <div className="avatar">
                {review.author.initials}
              </div>

              <div className="author-info">
                <strong>{review.author.name}</strong>
                <span>{review.relativeDate}</span>
              </div>
            </div>

            <p className="review-text">{review.text}</p>

            <div className="review-stars">
              {"★".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsCarousel;
