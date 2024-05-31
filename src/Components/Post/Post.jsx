/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div className='post-card'>
            <div className='card-child'>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <Link to={`/posts/post/${id}`}>
                <button className='btn'>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;