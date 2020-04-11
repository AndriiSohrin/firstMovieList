import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {changeCurrentPageAC} from "../../ActionCreators/ActionCreators";
import './pagination.css'

const Pagination = ({changeCurrentPage}) => {
    const pagination = [];
    for (let i = 1; i < 45; i++) {
        pagination.push(i)
    }

    return (
        <div className={'pagination'}>
            {pagination.length && pagination.map(el => <NavLink key={el} to={`/movie/${el}`}
                                                                onClick={() => changeCurrentPage(el)}>{el}</NavLink>)}
        </div>
    )
};
const mapStateToProps=(state)=>{
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPage: (id) => dispatch(changeCurrentPageAC(id))
    }
};

export const PaginationWithRedux = connect(mapStateToProps, mapDispatchToProps)(Pagination);
