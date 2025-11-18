import "./gallery.css"
import { useState, useEffect } from "react";
import { notify } from "./notification";

function DeleteButton({ filename, onDeleted }) {

  const deleteFile = async () => {
    if (!window.confirm(`Kas kustutada fail "${filename}"?`)) return;

    const res = await fetch(`http://localhost:3001/delete/${filename}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.success) {
      console.log("Kustutatud:", json.name);
      onDeleted?.(filename);
      notify("Pilt edukalt kustutatud!");
    } else {
      console.error("Kustutamine ebaõnnestus:", json.error);
    }
  };

  return (
    <button className="delete-nupp" onClick={deleteFile}>
     <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%" fill="#ffffffff"><path d="M261-120q-24.75 0-42.37-17.63Q201-155.25 201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>
    </button>
  );
}

export default DeleteButton;