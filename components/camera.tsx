import React, { useRef, useEffect, useState } from "react";

import styles from "../styles/camera.module.css";

export default function Camera() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 400, height: 300 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  return (
    <div className={styles.cameraDiv}>
      <h1>take a picture</h1>
      <div className={styles.spaceCamera}>
        <div className={styles.camera}>
          <video
            className="shadow mb-5 bg-white rounded"
            ref={videoRef}
          ></video>
          <button className="btn btn-primary">
            <span>Captura</span>
          </button>
        </div>
      </div>
    </div>
  );
}
