import { useState } from 'react';

const AuthBtn = () => {

    const [isAuthenticated, setAuthenticated] = useState(false);

    return (
        <button onClick={() => setAuthenticated(!isAuthenticated)}>
            {isAuthenticated ? 'Logout' : 'Login'}
        </button>
    )
};
export default AuthBtn;