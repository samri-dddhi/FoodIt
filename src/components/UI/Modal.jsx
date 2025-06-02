import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";



export default function Modal({children, open, className='', onClose}) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const modal = dialogRef.current;
        if (open){
          modal.showModal();
        } 
         return () => {
            if (modal.open) {
                modal.close();
            }
        }

    },[open])
    return createPortal (
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={onClose}>
        {children}
    </dialog>, 
    document.getElementById("modal"));
}