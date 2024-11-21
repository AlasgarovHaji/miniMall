import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h2>Menyu</h2>
          <p style={{ textAlign: "center" }}>
            <ul>
              <li>
                <Link to="/shop">Mağazalar</Link>
              </li>
              <li>
                <Link to="/restaurant">Restoranlar</Link>
              </li>
            </ul>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h2>Məlumat</h2>
          <p style={{ textAlign: "center" }}>
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
          </p>
        </div>

        <div className={styles.footerSection}>
          <h2>Ünvan</h2>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>
            Neftçilər metrosu yaxınlığı
            <br />
          </p>
          <p style={{ textAlign: "center" }}>
            <a
              href="https://www.google.com/maps/place/Mini+Mall/@40.4064848,49.9442416,17z/data=!3m1!4b1!4m6!3m5!1s0x4030630030c9edf1:0x304ca12b55319dad!8m2!3d40.4064807!4d49.9468165!16s%2Fg%2F11wqwzhptc?entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              Xəritə
            </a>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h2>BİZİ İzləyİn</h2>
          <div className={styles.socialIcons}>
            <p style={{ textAlign: "center", marginBottom: "10px" }}>
              <a
                href="https://www.instagram.com/minimall__official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                
                Instagram
              </a>
            </p>
           
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={togglePopup}>
          <div
            className={styles.popupContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>İş Saatları</h3>
            <ul>
              <li>Hər gün: 09:00 - 22:00</li>
            </ul>
            <button onClick={togglePopup} className={styles.closeButton}>
              Geri
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
