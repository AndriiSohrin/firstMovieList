import React from "react";
import './ToggleTheme.css'
import {connect} from "react-redux";
import {CHANGE_THEME} from "../../ActionTypes/ActionTypes";
import {onChangeTheme} from "../../ActionCreators/ActionCreators";

const ToggleTheme = ({changeTheme,onChangeTheme}) => {

    return (

            <div className={!changeTheme ? 'toggle-block' :'toggle-block toggle-active'} onClick={onChangeTheme}>
                <div className='toggle'/>
            </div>


    )
};

const mapStateToProps = (state)=>{
    return{
        changeTheme: state.movieListReducer.changeTheme
    }
};

const mapDispatchToProps=(dispatch)=>{
    return{
        onChangeTheme:()=>dispatch(onChangeTheme())
    }
};

export const ToggleThemeWithRedux = connect(mapStateToProps,mapDispatchToProps)(ToggleTheme);
