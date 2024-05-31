import { useLoaderData } from 'react-router-dom';
import './Posts.css';
import Post from '../Post/Post';
import { useState } from 'react';

const Posts = () => {
    const [fold, setFold] = useState(true);
    const posts = useLoaderData();

    return (
        <div>
            {
                fold ?
                    <div>
                        <div className='post-container'>
                            {posts.slice(0, 9).map(post => <Post key={post.id} post={post} />)}
                        </div>
                        <div className='fold-btn'><button onClick={() => setFold(!fold)}>See More</button></div>
                    </div> :
                    <div className='post-container'>
                        {posts.map(post => <Post key={post.id} post={post} />)}
                    </div>
            }
        </div>
    );
};

export default Posts;