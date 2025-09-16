import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Testimonials.css"
import "swiper/css";
import { Rating } from 'semantic-ui-react'
import ReactReadMoreReadLess from "react-read-more-read-less";
import review from "../data/Reviews.json"

const Testimonials = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    // Primary API call removed as requested.
    // Falling back to the GitHub raw content as the main data source.
    axios.get("https://raw.githubusercontent.com/xworkzodc/JSON/master/Reviews.json")
      .then(res => {
        setReviewData(res.data.Reviews);
      })
      .catch(err => {
        console.error("Error fetching data from GitHub source:", err);
        console.log("Fetching data from local source...");
        setReviewData(review.Reviews);
      });
  }, []);

  return (
    <div className='testimonials'>
      <section>
        <div className="heading">
          <h1>
            What Our
            <span> Students Say</span>
          </h1>
          <p>Hear from our successful students about their learning experience</p>
        </div>
        <div className="wrapper">
          {reviewData.map((d, i) => (
            <div className="testimonial-card" key={i}>
              <div className="card-header">
                <h2>{d.name}</h2>
                <Rating icon='star' defaultRating={d.rating} maxRating={5} disabled />
              </div>
              <div className="card-body">
                <span className='quote-icon left'>"</span>
                <p>
                  <ReactReadMoreReadLess
                    charLimit={325}
                    readMoreClassName="read-more-link"
                    readLessClassName="read-less-link"
                    readMoreText={" Read more ▼"}
                    readLessText={" Read less ▲"}
                  >
                    {d.content}
                  </ReactReadMoreReadLess>
                </p>
                <span className="quote-icon right">"</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials