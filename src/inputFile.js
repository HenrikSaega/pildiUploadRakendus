import { notify } from "./notification";
import { useRef, useState } from "react";

function UploadButton({onUpload }){
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);

    const openFilePicker = () =>{
      inputRef.current.click();
    }

    const upload = async () => {
      if (!file) return;

      const data = new FormData();
      data.append("image", file);

      const res = await fetch("http://localhost:3001/upload", {
        method: "POST",
        body: data
      });

      const json = await res.json();
      notify("Pilt edukalt üles laetud!");

      onUpload?.(json.url);
    };

    return (
      <div>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        
        <button className="upload-nupp" onClick={openFilePicker}>
          Vali pilt
        </button>

        {file && (
          <button className="upload-nupp" onClick={upload}>
            Lae üles
          </button>
        )}
      </div>
    );
} 
export default UploadButton;