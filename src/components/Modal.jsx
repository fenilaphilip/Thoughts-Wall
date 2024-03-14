import styles from "./Modal.module.css";

function Modal({ children, view }) {


    return (
        <>
            <div className={styles.backdrop} onClick={view} />
            <dialog open={true} className={styles.modal}>
                {children}
            </dialog>

        </>
    );
}

export default Modal;