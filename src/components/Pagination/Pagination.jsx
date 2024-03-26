import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import { IconContext } from "react-icons";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import './Pagination.css';

const Pagination = ({ setPage, products, quantity }) => {

    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 200,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20,
                duration: 2,
            },
        },
    };
    return (
        <motion.div
            variants  = { paginationVariants }
            initial   = 'hidden'
            animate   = 'visible'
            className = 'pagination'
        >
            <ReactPaginate
                containerClassName = { "pagination" }
                activeClassName    = { "active" }
                pageClassName      = { "page-item" }
                onPageChange       = { (event) => setPage(event.selected) }
                breakLabel         = "..."
                pageCount          = { Math.ceil(products.length / quantity) }
                previousLabel      = {
                    <IconContext.Provider value = {{ color: "#B8C1CC", size: "36px" }}>
                        <AiFillLeftCircle />
                    </IconContext.Provider>
                }
                nextLabel={
                    <IconContext.Provider value = {{ color: "#B8C1CC", size: "36px" }}>
                        <AiFillRightCircle />
                    </IconContext.Provider>
                }
            />
        </motion.div>
    );
};

Pagination.propTypes = {
    setPage  : PropTypes.func.isRequired,
    products : PropTypes.array.isRequired,
    quantity : PropTypes.number.isRequired,
};

export default Pagination;