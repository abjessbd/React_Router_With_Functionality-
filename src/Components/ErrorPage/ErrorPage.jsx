import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className='error-parent'>
            <div className='error-container'>
                <h1 className='error-headline'>OOPS! Please Go Back...</h1>
                <button onClick={handleNavigate}>Go Back Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;