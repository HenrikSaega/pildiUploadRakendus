import { useState, useEffect } from "react";
import "./gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img
          key={index}
          src={`http://localhost:3001${img}`}
          alt={`uploaded-${index}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
}
