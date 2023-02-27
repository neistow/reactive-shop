import React, { useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Dialog.css';
import AppBtn from './AppBtn';

type DialogProps = {
    title: string;
    message: string;
}

const Dialog = ({ title, message }: DialogProps) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleToggleDialog = () => {
        setShowDialog(!showDialog);
    };

    const dialogRef = useRef(null);

    return (
        <div>
            <AppBtn variant="primary" onClick={handleToggleDialog}>Test</AppBtn>
            <CSSTransition
                in={showDialog}
                timeout={300}
                classNames="dialog"
                unmountOnExit
                nodeRef={dialogRef}
            >
                <div className="dialog" ref={dialogRef}>
                    <h1>{title}</h1>
                    <p>{message}</p>
                    <button onClick={handleToggleDialog}>Close</button>
                </div>
            </CSSTransition>
        </div>
    );
};

export default Dialog;