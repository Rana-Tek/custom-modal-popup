import { useState } from "react";
import Modal from "./modal";
import "../style/modal.css";

export default function ModalTest() {
 
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }
    function onClose() {
        setShowModalPopup(false);
    }


return(
<div> </div>
    
)
}

