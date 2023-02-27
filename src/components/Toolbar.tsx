import { PropsWithChildren } from 'react';

import styles from './Toolbar.module.css'

const Toolbar = ({ children }: PropsWithChildren) => {
    return (
        <div className={styles.toolbar}>
            <h3>This is a toolbar!</h3>
            <span className={styles.spacer}></span>
            {children}
        </div>
    )
};

export default Toolbar;