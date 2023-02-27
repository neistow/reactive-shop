import React from 'react';

import styles from './Content.module.css';

const Content = ({ children }: React.PropsWithChildren) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default Content;