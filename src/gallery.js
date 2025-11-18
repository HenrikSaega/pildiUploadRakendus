import { useState, useEffect } from "react";
import DeleteButton from "./deletebutton";
import UploadButton from "./inputFile";
import "./gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/images")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);
  
  const addImage = (url) => {
    setImages(prev => [url, ...prev]);
  };

  const handleDelete = (filename) => {
    setImages((prev) => prev.filter((img) => img.split("/").pop() !== filename));
  };

  return (
    <div>
      <UploadButton onUpload={addImage} />

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img
              src={`http://localhost:3001${img}`}
              alt={`uploaded-${index}`}
              className="gallery-image"
            />
            <DeleteButton
              filename={img.split("/").pop()}
              onDeleted={handleDelete}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
