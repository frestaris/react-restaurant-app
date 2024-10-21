import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Jane Doe",
    profileImage: "https://i.pravatar.cc/48?u=4994326",
    stars: 4.0,
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "John Smith",
    profileImage: "https://i.pravatar.cc/48?u=499476",
    stars: 5.0,
  },
  {
    quote:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Alice Johnson",
    profileImage: "https://i.pravatar.cc/48?u=496896",
    stars: 4.5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Testimonials</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="header">
              <img
                className="profile-img"
                src={testimonial.profileImage}
                alt={testimonial.name}
              />
              <p className="text-blk name">{testimonial.name}</p>
            </div>
            <p className="text-blk description">{testimonial.quote}</p>
            <p className="text-blk quotes">”</p>
            <span className="star-icon">
              {Array.from({ length: Math.floor(testimonial.stars) }, (_, i) => (
                <span key={i} className="filled-star">
                  ★
                </span>
              ))}
              {testimonial.stars % 1 !== 0 && (
                <span className="half-star">★</span>
              )}
              {Array.from(
                { length: 5 - Math.ceil(testimonial.stars) },
                (_, i) => (
                  <span key={i} className="empty-star">
                    ☆
                  </span>
                )
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
