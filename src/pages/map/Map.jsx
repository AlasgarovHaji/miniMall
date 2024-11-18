import React, { useState } from "react";
import styles from "./map.module.css";

const Map = () => {
  // Mərtəbə və restoran məlumatları
  const floors = {
    1: ["Mağaza", "Restoran "],
    2: ["Restoran ", "Mağaza"],
    3: ["Mağaza", "Restoran "],
    4: ["Restoran ", "Mağaza"],
  };

  // State
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Mərtəbə düyməsinə vurulanda restoranları göstərmək
  const handleFloorClick = (floor) => {
    setSelectedFloor(floor);
    setSelectedRestaurant(null); // Restoran məlumatını sıfırlayın
  };

  // Restoran düyməsinə vurulanda restoran məlumatını göstərmək
  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <div className={styles.container}>
      {/* Sol Bölmə - Mərtəbələr */}
      <div className={styles.sidebar}>
        {!selectedRestaurant ? (
          Object.keys(floors).map((floor) => (
            <button
              key={floor}
              className={`${styles.floorButton} ${selectedFloor === floor ? styles.active : ""}`}
              onClick={() => handleFloorClick(floor)}
            >
              Mərtəbə {floor}
            </button>
          ))
        ) : (
          <div>
            <h3>{selectedRestaurant} Haqqında</h3>
            <p>Burada tezliklə {selectedRestaurant} haqqında məlumat olacaq.</p>
            <button className={styles.backButton} onClick={() => setSelectedRestaurant(null)}>
              Geri
            </button>
          </div>
        )}
      </div>

      {/* Sağ Bölmə - Restoranlar */}
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
      </div>
    </div>
  );
};

export default Map;
