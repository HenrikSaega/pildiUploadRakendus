import { useState, useEffect } from "react";
import "./gallery.css";
import DeleteButton from "./deletebutton";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);
  
  const handleDelete = (filename) => {
    setImages((prev) => prev.filter((img) => img.split("/").pop() !== filename));
  };
  
  return (
      <div className="gallery-grid">
        {images.map((img, index) => {

          return (
            <div key={index} className="gallery-item">
              <img
                src={`http://localhost:3001${img}`}
                alt={`uploaded-${index}`}
                className="gallery-image"
              />
              <DeleteButton
                filename={img.split("/").pop()}
                onDeleted={() => setImages(prev => prev.filter(i => i !== img))}
              />
            </div>
          );
        })}
      </div>
  );
}
