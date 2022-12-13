import React, { useEffect, useState } from 'react';
import image from './asset/tr.jpg';
import image0 from './asset/tr0.jpg';
import image1 from './asset/tr1.jpg';
import image2 from './asset/tr2.jpg';
import image3 from './asset/tr3.jpg';
import image4 from './asset/tr4.jpg';
import image5 from './asset/tr5.jpg';
import image6 from './asset/alatoo logo.jpg';
import '../App.css';


const Image = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image,image0, image1, image2, image3, image4, image5])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage > 3 ? 0 : selectedImage + 1)
    }, 99999)
  }, [])

  return (
    <div className='position'>
      <h1>TURKIYE</h1>
      <br />
      <img src={allImages[selectedImage]} alt="flag" className='image'/>
      <div>
      <button
      onClick={() => {
        if (selectedImage < allImages.length -1 ) 
        setSelectedImage(selectedImage + 1)
      }}
       className='btn'>Click to travel around TURKIYE !</button>
      </div>
      <img src={image6} alt="logo" width={60} className="logo"/>
    </div>
  )
}

export default Image