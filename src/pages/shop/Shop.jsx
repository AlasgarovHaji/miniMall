import React, { useState } from "react";
import styles from "./shop.module.css";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    { id: 1, name: "Azram Collection", imageSrc: "/src/assets/AzramCollection.webp"},
    { id: 2, name: "Amisay", imageSrc: "/src/assets/Amisay.webp" },
    { id: 3, name: "Aykız", imageSrc: "/src/assets/Aykız.webp" },
    { id: 5, name: "Fi-dan Boutique", imageSrc: "/src/assets/Fi-danBoutique.webp" },
    
    { id: 7, name: "Merve Moda", imageSrc: "/src/assets/MerveModa.webp" },
    { id: 8, name: "Mk Brend", imageSrc: "/src/assets/MkBrend.webp" },
    { id: 9, name: "Muzza", imageSrc: "/src/assets/Muzza.webp" },
    { id: 10, name: "Narqız", imageSrc: "/src/assets/Narqız.webp" },
    
    { id: 11, name: "Nuance Perfume", imageSrc: "/src/assets/NuancePerfume.webp"},
    { id: 12, name: "Pıçıltı", imageSrc: "/src/assets/Pıçıltı.webp" },
    { id: 12, name: "Zəfər Xalça", imageSrc: "/src/assets/ZəfərXalça.webp" },
    { id: 12, name: "Zəhra Baby Kids", imageSrc: "/src/assets/ZəhraBabyKids.webp" },
    { id: 6, name: "KomBra", imageSrc: "/src/assets/KomBra.webp"},
    { id: 4, name: "Erika", imageSrc: "/src/assets/Erika.webp" },
    { id: 12, name: "Sisters Boutique ", imageSrc: "/src/assets/SistersBoutique.webp" },
    { id: 12, name: "Stil", imageSrc: "/src/assets/Stil.webp" },
    { id: 12, name: "Onur Kids", imageSrc: "/src/assets/OnurKids.webp" },
    
  ];


  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.shopContainer}>
      <h1 className={styles.title}>Mağazalar</h1>
          <input
        type="text"
        placeholder="Mağaza adını axtarın..."
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

export default Shop;
