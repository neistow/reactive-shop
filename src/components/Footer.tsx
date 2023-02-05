const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div style={{ padding: '0 1rem', backgroundColor: 'lightgray' }}>
            Reactive Shop &copy; {currentYear}
        </div>
    )
};

export default Footer;