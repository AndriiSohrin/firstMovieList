import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './btnWithSortMenu.css'
import {GENRES_SORT, GET_GENRES} from "../../ActionTypes/ActionTypes";
import {onClickGenresAC} from "../../ActionCreators/ActionCreators";


 const BtnWithSortMenu = ({genresList, getGenres,onClickGenres}) => {
    const [isOpen, setIsOpen] = useState(false);

    const onIsOpen = () => {
        setIsOpen((prev) => !prev)
    };

    useEffect(() => {
        getGenres()
    }, []);

    return (
        <div className='sort col-2'>
            <button onClick={onIsOpen}  className='btn-sort'>Категории</button>
            <div className={`${isOpen && 'menu-down'}`}>

                {isOpen && genresList.genres.map(el=><div onClick={()=>{onClickGenres(el.id);onIsOpen()}} className='menu-down-item'>{el.name}</div>)}
            </div>
        </div>

    )
};

const getGenres = () => (dispatch) => {
    return (
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=19eec3c1db6bc640e4777bf74bacacb0`)
            .then(resolve => resolve.json())
            .then(json => dispatch({type: GET_GENRES, payload: json}))
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
        onClickGenres:(id) => dispatch(onClickGenresAC(id))
    }
};

export const BtnWithSortMenuWithRedux = connect(mapStateToProps, mapDispatchToProps)(BtnWithSortMenu);
