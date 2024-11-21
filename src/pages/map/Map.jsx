import React, { useState, useEffect } from "react";
import styles from "./map.module.css";

const Map = () => {
  const floors = {
    1: ["Mağaza", "Restoran"],
    2: ["Restoran", "Mağaza"],
    3: ["Mağaza", "Restoran"],
    4: ["Restoran", "Mağaza"],
  };

  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
    setSelectedRestaurant(null);
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // Componentin yükləndiyi anda fade-in effektini başlatmaq üçün useEffect istifadə edirik
  useEffect(() => {
    const timeout = setTimeout(() => {
      document.querySelector(".container").classList.add(styles.fadeIn);
    }, 0); // 0ms sonra fade-in effekti başlasın

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      {/* Sol Bölmə */}
      <div className={styles.sidebar}>
        {!selectedRestaurant ? (
          Object.keys(floors).map((floor) => (
            <button
              key={floor}
              className={`${styles.floorButton} ${
                selectedFloor === floor ? styles.active : ""
              }`}
              onClick={() => handleFloorClick(floor)}
            >
              Mərtəbə {floor}
            </button>
          ))
        ) : (
          <div>
            <h3>{selectedRestaurant} Haqqında</h3>
            <p>Burada tezliklə {selectedRestaurant} haqqında məlumat olacaq.</p>
            <button
              className={styles.backButton}
              onClick={() => setSelectedRestaurant(null)}
            >
              Geri
            </button>
          </div>
        )}
      </div>

      {/* Sağ Bölmə */}
      <div className={styles.content}>
        {selectedFloor && !selectedRestaurant && (
          <div>
            <h3>Mərtəbə {selectedFloor} Restoranlar və Mağazaları</h3>
            {floors[selectedFloor].map((restaurant) => (
              <button
                key={restaurant}
                className={styles.restaurantButton}
                onClick={() => handleRestaurantClick(restaurant)}
              >
                {restaurant}
              </button>
            ))}
          </div>
        )}
        {/* Google Map */}
        <div className={styles.mapContainer}>
          <h3>Xəritə</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.540095385938!2d49.9468165!3d40.4064807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030630030c9edf1%3A0x304ca12b55319dad!2sMini%20Mall!5e0!3m2!1sen!2s!4v1699960461307!5m2!1sen!2s"
            width="100%"
            height="300px"
            style={{ border: "none", borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
