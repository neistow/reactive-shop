import { useState } from 'react';
import AuthModal from './AuthModal';
import { authorize } from '../api/mocks';

const AuthBtn = () => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);

    const handleAuthClick = () => {
        if (isAuthenticated) {
            setAuthenticated(false);
            return;
        }
        setAuthModalOpen(true);
    };

    const handleClose = (success: boolean) => {
        setAuthenticated(success);
        setAuthModalOpen(false);
    };

    const handleAuthorize = async (values: { username: string; password: string }) => {
        await authorize(values.username, values.password);
    };

    return (
        <>
            <button onClick={handleAuthClick}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>

            <AuthModal
                open={authModalOpen}
                onClose={handleClose}
                onAuthorize={handleAuthorize}
            />
        </>
    )
};
export default AuthBtn;