import PropTypes from 'prop-types';
import PostCard from './PostCard';

const PostContainer = ({posts}) => {

    return (
        <div className="space-y-5 my-10">

            {
                posts.map(post => <PostCard key={post._id} post={post} />)
            }
            
        </div>
    );
};

PostContainer.propTypes = {
    posts: PropTypes.array,
}

export default PostContainer;