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
        
        // Fetch from the JSON file on GitHub
        const response = await axios.get(
          "https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery.json"
        );
        
        // Create image URLs from the JSON data
        const images = response.data.images.map(item => ({
          id: item.id,
          imgSrc: `https://raw.githubusercontent.com/x-workzdev/Xworkz-images/develop/Gallery/${item.filename}`
        }));
        
        setGalleryData(images);
      } catch (err) {
        console.error("Error fetching gallery data:", err);
        setGalleryData([]);
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

  if (galleryData.length === 0) {
    return (
      <div className="marquee-loading">
        <p>No images available</p>
      </div>
    );
  }

  // Duplicate for smooth looping
  const duplicatedImages = [...galleryData, ...galleryData];

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {duplicatedImages.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className={`marquee-item ${index % 2 === 0 ? 'item-up' : 'item-down'}`}
          >
            <img 
              src={item.imgSrc} 
              alt={`Xworkz Memory ${item.id}`}
              loading="lazy" 
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200/ffffff/007bff?text=Image+Loading";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;