import React, { useEffect, useState } from 'react';
import './App.css';
import cake1 from './assets/cake1.png';
import cake2 from './assets/cake2.png';
import cake3 from './assets/cake3.png';
import cake100 from './assets/100.png';
import cake80 from './assets/80.png';
import cake60 from './assets/60.png';
import cake40 from './assets/40.png';
import cake20 from './assets/20.png';
import star from './assets/star-nobg.png';

function App() {
  // images to rotate through (add/remove as needed)
  const images = [cake1, cake2, cake3, cake100, cake80, cake60, cake40, cake20];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // change image every 2 seconds
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 200);

    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-contianer">
          <img src={star} alt="star" className="border-star" />
          <img src={star} alt="star" className="border-star2" />
          <img src={star} alt="star" className="border-star3" />
          <img src={star} alt="star" className="border-star4" />
          <img src={star} alt="star" className="border-star5" />


          <p>HAPPY BIRTHDAY!</p>
          <img
            src={images[index]}
            alt={`cake-${index + 1}`}
            className="cake-image"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
