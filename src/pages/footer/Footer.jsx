import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

import Reactimg from "../../assets/react.svg";
function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Menu Bölməsi */}
        <div className={styles.footerSection}>
          <h2>Menyu</h2>
          <ul>
            <li>
              <Link to="/shop">Mağazalar</Link>
            </li>
            <li>
              <Link to="/restaurant">Restoranlar</Link>
            </li>
          </ul>
        </div>

        {/* Information Bölməsi */}
        <div className={styles.footerSection}>
          <h2>Məlumat</h2>
          <ul>
            <li>
              <button className={styles.linkButton} onClick={togglePopup}>
                İş Saatları
              </button>
            </li>
            <li>
              <Link to="/rent">Əlaqə</Link>
            </li>
          </ul>
        </div>

        {/* Unvan Bölməsi */}
        <div className={styles.footerSection}>
          <h2>Ünvan</h2>
          <p>Neftçilər metrosu yaxınlığı</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* Bizi İzləyin Bölməsi */}
        <div className={styles.footerSection}>
          <h2>Bizi İzləyin</h2>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"/src/assets/insta.png"} alt="Instagram" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={"/src/assets/fb.png"} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* İş Saatləri Pop-up */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={togglePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>İş Saatları</h3>
            <ul>
              <li>Bazar ertəsi: 09:00 - 18:00</li>
              <li>Çərşənbə axşamı: 09:00 - 18:00</li>
              <li>Çərşənbə: 09:00 - 18:00</li>
              {/* Üç əlavə sətir əlavə edə bilərsiniz */}
            </ul>
            <button onClick={togglePopup} className={styles.closeButton}>
              Bağla
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
