import React from 'react'
import Marquee from 'react-fast-marquee'

const Banner = () => {
  return (
    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Marquee
        pauseOnHover='true'
        play='true'
        speed={'70'}
        gradient='true'
        gradientWidth={'100px'}
      >
        <span
          style={{
            color: 'red',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif'
          }}
        >
          {/* Free Java Class for 1 Month only for any Graduates from any Stream !
          Registration for both Offline and Online Classes HURRY UP! */}
          New CSR 2025 Batch Starting from June month Free for 3 Month only for 2025 Graduates from any Stream !
          Registration for Offline Classes HURRY UP!
        </span>
      </Marquee>
    </div>
  )
}

export default Banner
