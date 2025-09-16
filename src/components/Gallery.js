import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Gallery.css";

export const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://raw.githubusercontent.com/xworkzodc/Xworkz-images/master/Gallery.json"
        );
        const images = (response.data.images || response.data).slice(0, 10);
        setGalleryData(images);
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setGalleryData([
          { id: 1, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image2.jpg" },
          { id: 2, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image8.jpg" },
          { id: 3, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image5.jpg" },
          { id: 4, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image7.jpg" },
          { id: 5, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image6.jpg" },
          { id: 6, imgSrc: "https://raw.githubusercontent.com/xworkzodc/Gallery/master/images/image5.jpg" },
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryData();
  }, []);

  if (loading) {
    return (
      <div className="marquee-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  // Duplicate for smooth looping
  const duplicatedImages = [...galleryData, ...galleryData];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {duplicatedImages.map((item, index) => (
          <div key={`${item.id}-${index}`} className="marquee-item">
            <img 
              src={item.imgSrc} 
              alt={`Xworkz Memory ${item.id}`}
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};