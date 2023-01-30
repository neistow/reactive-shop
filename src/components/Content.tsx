import React from 'react';

const Content = ({ children }: React.PropsWithChildren) => {
    return (
        <div style={{ maxWidth: '80%', margin: '0 auto' }}>
            {children}
        </div>
    );
};

export default Content;