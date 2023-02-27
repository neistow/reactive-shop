import styles from './Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            Reactive Shop &copy; {currentYear}
        </div>
    )
};

export default Footer;