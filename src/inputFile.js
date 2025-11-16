import {useRef, useState} from "react"

function UploadButton(){
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);

    const openFilePicker = () =>{
        inputRef.current.click();
    }

    const upload = async () => {
        const data = new FormData();
        data.append("image", file);

        const res = await fetch("http://localhost:3001/upload", {
          method: "POST",
          body: data
        });

        const json = await res.json();
        console.log("Üles laaditud:", json);
    };

    return (
        <div>
          <input
            type="file"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button onClick={openFilePicker}>
            Vali pilt
          </button>

          {/* Üleslaadimise nupp */}
          {file && (
            <button onClick={upload}>
              Lae üles
            </button>
          )}
        </div>
    );
} 
export default UploadButton;