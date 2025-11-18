import { useState, useEffect } from "react";
import './App.css'

//Jätame tühjaks, et vältida erroreid
let externalShow = () => {};

// Kutsume väljastpoolt välja, et näidata teadet
export function notify(msg) {
    externalShow(msg);
}

export default function Notification(){
    const [message, setMessage] = useState("");

    // Seadistame välise funktsiooni teate näitamiseks
    useEffect(() => {
        externalShow = (msg) => {
            setMessage(msg);
            setTimeout(() => setMessage(""), 5000);
        };
    }, []);

    if (!message) return null;
    return (
        <div>
            {message && <div className="notification">{message}</div>}
        </div>
    );
}