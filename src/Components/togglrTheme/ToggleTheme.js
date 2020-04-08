import React from "react";
import './ToggleTheme.css'
import {connect} from "react-redux";

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
        onChangeTheme:()=>dispatch({type:'CHANGE_THEME'})
    }
};

export const ToggleThemeWithRedux = connect(mapStateToProps,mapDispatchToProps)(ToggleTheme);
