import React from 'react';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div style={{marginTop: '20px', marginBottom: '20px'}}>
      <Marquee
        pauseOnHover="true"
        play="true"
        speed={'70'}
        gradient="true"
        gradientWidth={'100px'}
      >
        <span style={{color: 'red', fontSize: '20px', fontWeight: 'bold'}}>
          Free Java & Testing Class for 2 Month only for 2024 Graduates from any Stream ! Registration for both Offline and Online Classes HURRY UP!
        </span>
      </Marquee>
    </div>
  );
};

export default Banner;
