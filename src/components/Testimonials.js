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
    axios.get("https://ombn.in/xworkz_api/getReviews")
      .then(res => {
        setReviewData(res.data.Reviews)
      })
      .catch(err => {
        console.log(err)
        console.log("data from secondary source")
        axios.get("https://raw.githubusercontent.com/xworkzodc/JSON/master/Reviews.json")
      .then(res => {
        setReviewData(res.data.Reviews)
      })
      .catch(err => {
        console.log(err)
        console.log("data from third source")
        setReviewData(review.Reviews)
      })
      })
  }, []);

  return (
    <div className='testimonials'>
      <section>
        <div className="heading"><h1>Testimonials</h1></div>
        <div className="wrapper">


          {

            reviewData.map((d, i) => (

              <div className="container" key={i}>
  

                
                <p><span className='fa fa-quote-left left'>
                <h2>{d.name}</h2>
                <Rating icon='star' defaultRating={d.rating} maxRating={5} />
                  </span><ReactReadMoreReadLess
                  charLimit={325}
                  readMoreClassName="readMoreClassName"
                  readLessClassName="readLessClassName"
                  readMoreText={"    Read more ▼"}
                  readLessText={"    Read less ▲"}

                >
                  {d.content}
                </ReactReadMoreReadLess>
                  <span className="fa fa-quote-right right"></span></p>
              </div>

            ))}

        </div>
      </section>
    </div>
  )

}

export default Testimonials