import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './btnWithSortMenu.css';
import {onClickGenresAC, getGenres} from "../../ActionCreators/ActionCreators";

const BtnWithSortMenu = ({genresList, getGenres, onClickGenres}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIsOpen = () => {
        setIsOpen((prev) => !prev)
    };

    useEffect(() => {
        getGenres()
    }, []);

    return (
        <div className='sort'>
            <button onClick={onIsOpen} className='btn-sort'>Категории</button>
            <div className={`${isOpen && 'menu-down'}`}>

                {isOpen && genresList.genres.map(el => <div onClick={() => {
                    onClickGenres(el.id);
                    onIsOpen()
                }} className='menu-down-item'>{el.name}</div>)}
            </div>
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        genresList: state.movieListReducer.genresList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenres: () => dispatch(getGenres()),
        onClickGenres: (id) => dispatch(onClickGenresAC(id))
    }
};

export const BtnWithSortMenuWithRedux = connect(mapStateToProps, mapDispatchToProps)(BtnWithSortMenu);
