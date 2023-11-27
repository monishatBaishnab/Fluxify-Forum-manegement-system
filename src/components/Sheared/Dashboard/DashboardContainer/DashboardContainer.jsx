import { Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';
const DashboardContainer = ({ children, title }) => {
    return (
        <div className="container py-10">
            <div className="bg-white p-5">
                {title && <Typography variant="h4" className="text-blue-500 mb-5 border-b pb-2">{title}</Typography>}
                {children}
            </div>
        </div>
    );
};

DashboardContainer.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default DashboardContainer;