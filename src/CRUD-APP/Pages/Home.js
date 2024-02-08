import React from 'react';
import './Home.css';
import imageHome from '../images/home.jpg';

function Home() {
  return (
    <div className="wrapper">
      <header>
        <img
          className="background"
          src={imageHome}
          alt=""
        />
        <img className="foregound" src="images/trees.png" alt="" />
        <h1 className="title">Hello</h1>
      </header>
      <div className='section'>
        Welcome to our beautiful home page. This is some text describing the content of the home div
        Welcome to our beautiful home in the heart of nature. Embrace the tranquility and serenity that surrounds you as you step into this haven. Our cozy retreat offers a perfect blend of comfort and elegance.

        Feel the warmth of the sun gently touching your face as you enjoy a cup of coffee on the porch. The scenic views of the mountains create a picturesque backdrop for your stay. Immerse yourself in the symphony of chirping birds and rustling leaves.
        
        Indulge in the comforts of modern living with our well-appointed rooms and thoughtful amenities. Whether you're seeking adventure or relaxation, our home is the ideal starting point for your journey.
        
        Explore the nearby trails and discover hidden gems in the wilderness. Return to the comfort of our home for a delightful evening by the fireplace, sharing stories with loved ones.
        
        At night, let the starry sky be your ceiling, and the gentle night sounds be your lullaby. As you close your eyes, know that you are embraced by the magic of nature and the warmth of our welcoming home.
        
        Experience a retreat like no other, where every moment is a memory waiting to be cherished. Welcome to a place where nature meets comfort, and memories are woven into the fabric of your stay.
        .
      </div>
    </div>
  );
}

export default Home;
