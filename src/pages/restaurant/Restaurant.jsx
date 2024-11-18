import React, { useState } from "react";
import styles from "./restaurant.module.css";

function Restaurant()
 {
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    { id: 1, name: "Kitch Noii", imageSrc: "/src/assets/r1.jpg" },
    { id: 2, name: "İtaliano", imageSrc: "/src/assets/r2.jpeg" },
    { id: 3, name: "Soul Coffee", imageSrc: "/src/assets/soulcoffee.jpeg" },
    { id: 4, name: "Pizza X", imageSrc: "/src/assets/pizza.jpeg" },
    { id: 5, name: "Kitch Noii", imageSrc: "/src/assets/r1.jpg" },
    { id: 6, name: "İtaliano", imageSrc: "/src/assets/r2.jpeg" },
    { id: 7, name: "Soul Coffee", imageSrc: "/src/assets/soulcoffee.jpeg" },
    { id: 8, name: "Pizza X", imageSrc: "/src/assets/pizza.jpeg" },
    { id: 9, name: "Kitch Noii", imageSrc: "/src/assets/r1.jpg" },
    { id: 10, name: "İtaliano", imageSrc: "/src/assets/r2.jpeg" },
    { id: 11, name: "Soul Coffee", imageSrc: "/src/assets/soulcoffee.jpeg" },
    { id: 12, name: "Pizza X", imageSrc: "/src/assets/pizza.jpeg" },
   
  ]; 


  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.title}>Restoranlar</h1>
          <input
        type="text"
        placeholder="Restoran adını axtarın..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

 
      <div className={styles.cardsContainer}>
       {filteredShops.map((shop) => (
          <div key={shop.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={shop.imageSrc} alt={shop.name} className={styles.image} />
            </div>
            <h3 className={styles.shopName}>{shop.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
