import { IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Pagination = ({ setPage, offset, count = 1 }) => {
    const [active, setActive] = useState(1);

    useEffect(() => {
        setPage(active);
    }, [active, setPage]);

    const pages = Math.ceil(parseInt(count) / parseInt(offset));

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === parseInt(pages)) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };



    return (
        <div className="container">
            <div className="flex justify-center items-center gap-4">
                <IconButton
                    variant="text"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <BsArrowLeft className="text-xl" />
                </IconButton>
                <div className="flex items-center gap-2">
                    {
                        [...Array(pages ? pages : 1).keys()]?.map(page => <IconButton key={page} {...getItemProps(page + 1)}>{page + 1}</IconButton>)
                    }
                </div>
                <IconButton
                    variant="text"
                    onClick={next}
                    disabled={active === parseInt(pages)}
                >
                    <BsArrowRight className="text-xl" />

                </IconButton>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    setPage: PropTypes.func,
    offset: PropTypes.number,
    count: PropTypes.number,
}

export default Pagination;