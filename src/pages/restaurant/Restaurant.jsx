import React from "react";
import styles from "./restaurant.module.css";

function Restaurant() {
  return (
    <div className={styles.container}>
      <h3>Tezliklə Xidmətinizdə...</h3>
      <div className={styles.videoWrapper}>
        {/* Video element */}
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/src/assets/video2.mp4"
            type="video/mp4"
          />
          
          Sizin brauzeriniz video oxutmağa dəstək vermir.
        </video>
      </div>
    </div>
  );
}

export default Restaurant;
