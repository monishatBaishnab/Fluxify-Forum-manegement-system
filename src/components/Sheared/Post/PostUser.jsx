import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const PostUser = ({user, deffDay}) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src={user.image} alt={user.name} />
            </div>
            <div>
                <Typography variant="h6" className="font-medium whitespace-nowrap">{user.name}</Typography>
                <Typography as='span' className="text-sm text-c-gray">{deffDay > 0 ? `${deffDay} days ago` : 'Today'} </Typography>
            </div>
        </div>
    );
};

PostUser.propTypes = {
    user: PropTypes.object,
    deffDay: PropTypes.number,
}

export default PostUser;