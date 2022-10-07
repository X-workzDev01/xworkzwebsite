import React from 'react';
import { Carousel } from 'react-carousel-minimal';


function Reviews() {
 const data = [
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/56.jpeg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image15.jpeg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image29.jpeg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image32.jpg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/members8.jpg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image17.jpeg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image18.jpeg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image31.jpg",
      caption: ""
    },
    {
      image: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/members9.jpg",
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    
    
  
      <div style={{ textAlign: "center" }}>
       
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="400px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            
            slideNumberStyle={slideNumberStyle} 
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false }
            thumbnailWidth="100px"
            style={{
              textAlign: "right",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
     
    
  );
}

export default Reviews;
