import AuthBtn from './AuthBtn';

const Toolbar = () => {
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
            <AuthBtn/>
        </div>
    )
};

export default Toolbar;