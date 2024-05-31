import { useLoaderData, useNavigate } from 'react-router-dom';
import './ShowDetails.css';

const ShowDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(-1)
    }
    const { title, body } = data;
    return (
        <div className='showDetails'>
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
                <button className='show-btn' onClick={() => handleNavigate()}>Go Back</button>
            </div>
        </div>
    );
};

export default ShowDetails;