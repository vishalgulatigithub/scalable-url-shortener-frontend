import { useState } from "react";
import "../styles/testimonial.css";

export default function Testimonial() {

  const testimonials = [
    {
      text: "When it came to deciding on a platform to use for generating all of our QR Codes, there was a general consensus among the team—of course we should use Bitly! We didn’t even give it a second thought.",
      name: "Melody Park",
      role: "Marketing Lead at Smalls",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "This platform helped us simplify our marketing campaigns. Creating and tracking short links has never been easier.",
      name: "David Kim",
      role: "Product Manager at Nexa",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "The analytics and QR code features helped us understand our audience better and improve engagement significantly.",
      name: "Emma Wilson",
      role: "Growth Manager at BrightLabs",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonial-section">

      <h1 className="testimonial-title">
        What our customers are saying
      </h1>

      <div className="testimonial-grid">

        {/* LEFT ARROW */}
        <button className="slider-btn left" onClick={prevSlide}>
          ←
        </button>

        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >

          {testimonials.map((t, i) => (
            <div className="testimonial-wrapper" key={i}>

              <div className="testimonial-bg"></div>

              <div className="testimonial-card">

                <div className="quote">❝</div>

                <p className="testimonial-text">{t.text}</p>

                <div className="testimonial-user">

                  <img src={t.img} alt={t.name} />

                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* RIGHT ARROW */}
        <button className="slider-btn right" onClick={nextSlide}>
          →
        </button>

      </div>

    </section>
  );
}