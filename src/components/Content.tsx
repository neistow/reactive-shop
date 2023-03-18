import React from 'react';

import styles from './Content.module.css';
import { useSelector } from 'react-redux';
import { selectTheme } from '../themeSlice';

const Content = ({ children }: React.PropsWithChildren) => {
    const theme = useSelector(selectTheme);

    return (
        <div>
            Theme is: {theme}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Content;