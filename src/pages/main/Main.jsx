import React, { useState, useEffect } from 'react';
import styled from "./main.module.css";
import Img from "../../assets/react.svg"
function Main() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    
    
    "/src/assets/MiniMall1.webp",
    "/src/assets/MiniMall4.webp",
    "/src/assets/soulcoffee.webp",
    
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); // hər 4 saniyədən bir şəkil dəyişir
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className={styled.main}>
        <img src={images[currentImage]} alt="Carousel" className={styled.carouselImage} />
      </div>
      
      <h2>Mağazalar</h2>
      <Maghazalar />
      <br />
      
      <br />
      <h2>Restoranlar</h2>
       <h3>Tezlikə xidmətinizdə...</h3>
      
    </>
  );
}
function Xeberler() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsItems = [
    { image: "/src/assets/news1.webp", description: "Bu, xəbər 1-in qısa təsviridir." },
    { image: "/src/assets/news2.png", description: "Bu, xəbər 2-in qısa təsviridir." },
    { image: "/src/assets/news3.png", description: "Bu, xəbər 3-in qısa təsviridir." },
    { image: "/src/assets/news4.png", description: "Bu, xəbər 4-in qısa təsviridir." },
    
  ];
  const itemsPerPage = 4;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };
  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedItems.push(newsItems[(currentIndex + i) % newsItems.length]);
  }
  return (
    <div className={styled.newsContainer}>
      <button className={styled.arrowButton} onClick={handlePrev}>←</button>
      <div className={styled.cardWrapper}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styled.card}>
            <img src={item.image} alt={`News ${index + currentIndex + 1}`} className={styled.cardImage} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={styled.arrowButton} onClick={handleNext}>→</button>
    </div>
  );
}

function Maghazalar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsItems = [
    { image: "/src/assets/Muzza.webp", description: "Muzza" },
    { image: "/src/assets/Pıçıltı.webp", description: "Pıçıltı" },
    { image: "/src/assets/AzramCollection.webp", description: "Azram Collection" },
    { image: "/src/assets/KomBra.webp", description: "Kom Bra" },
    { image: "/src/assets/NaxışHalı.webp", description: "Naxış Halı" },
    { image: "/src/assets/Narqız.webp", description: "Narqız" },
    { image: "/src/assets/Amisay.webp", description: "Amisay" },
    { image: "/src/assets/ZəfərXalça.webp", description: "Zəfər Xalça" },
    { image: "/src/assets/NaxışHalı.webp", description: "Naxış Halı" },
    
    { image: "/src/assets/NuancePerfume.webp", description: "Nuance Perfume" },
    { image: "/src/assets/SistersBoutique.webp", description: "Sisters Boutique" },
    { image: "/src/assets/Aykız.webp", description: "Aykız" },
    { image: "/src/assets/Fi-danBoutique.webp", description: "Fi-dan Boutique" },
    { image: "/src/assets/MerveModa.webp", description: "Merve Moda" },
    { image: "/src/assets/Erika.webp", description: "Erika" },

   

    
  ];
  const itemsPerPage = 4;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };
  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedItems.push(newsItems[(currentIndex + i) % newsItems.length]);
  }
  return (
    <div className={styled.newsContainer}>
      <button className={styled.arrowButton} onClick={handlePrev}>←</button>
      <div className={styled.cardWrapper}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styled.card}>
            <img src={item.image} alt={`News ${index + currentIndex + 1}`} className={styled.cardImage} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={styled.arrowButton} onClick={handleNext}>→</button>
    </div>
  );
}

function Restoranlar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const newsItems = [
    { image: "/src/assets/r1.jpg", description: "Bu, Restoran 1-in qısa təsviridir." },
    { image: "/src/assets/r2.jpeg", description: "Bu, Restoran 2-in qısa təsviridir." },
    { image: "/src/assets/soulcoffee.jpeg", description: "Bu, Restoran 3-in qısa təsviridir." },
    { image: "/src/assets/pizza.jpeg", description: "Bu, Restoran 4-in qısa təsviridir." },
    { image: "/src/assets/r2.jpg", description: "Bu, Restoran 5-in qısa təsviridir." },
    
  ];
  const itemsPerPage = 4;
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length);
  };
  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedItems.push(newsItems[(currentIndex + i) % newsItems.length]);
  }
  return (
    <div className={styled.newsContainer}>
      <button className={styled.arrowButton} onClick={handlePrev}>←</button>
      <div className={styled.cardWrapper}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styled.card}>
            <img src={item.image} alt={`News ${index + currentIndex + 1}`} className={styled.cardImage} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={styled.arrowButton} onClick={handleNext}>→</button>
    </div>
  );
}



export default Main;