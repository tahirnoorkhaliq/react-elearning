import './modal.styles.css'
const Modal =({isOpen,onClose,children})=>{
    if(!isOpen) return null;

    return (
        <div className="modal-popup">
            <div className="modal-popup-body">
                {children}
            </div>
        </div>

    )
}
export default Modal;
