import { PropsWithChildren } from 'react';

const Toolbar = ({ children }: PropsWithChildren) => {
    return (
        <div style={{
            backgroundColor: 'lightgray',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem'
        }}>
            <h3>This is a toolbar!</h3>
            <span style={{ flex: '1 1 auto' }}></span>
            {children}
        </div>
    )
};

export default Toolbar;