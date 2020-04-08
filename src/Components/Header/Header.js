import React, {useState} from "react";
import {BtnWithSortMenuWithRedux} from "../btnWithSortMenu/btnWithSortMenu";
import './header.css'
import {connect} from "react-redux";



const Logo = () => {

    return (
        <div className='col-2'>
            <img src='https://cdn.worldvectorlogo.com/logos/brothers-photography.svg' alt="#" style={{width: 200}}/>
        </div>
    )
};




const Header = ({valueMainInput,onChangeMainInput,movieSearch,changeTheme}) => {


    const change = (e) =>{
        onChangeMainInput(e.target.value)
   };

    return (
        <div className={`header col-12 position-fixed ${!changeTheme?'header':'header2'}`}>
          <div>
              <Logo/>
          </div>
            <div className="input-group col-8">
                <div className="input-group-prepend" onClick={movieSearch}>
                    <span className="input-group-text" id="inputGroup-sizing-default">Поиск</span>
                </div>
                <input type="text"
                       className="form-control"
                       aria-label="Sizing example input"
                       aria-describedby="inputGroup-sizing-default"
                       value={valueMainInput}
                       onChange={change}
                />
            </div>
            <BtnWithSortMenuWithRedux/>

        </div>
    )
};




const mapStateToProps = (state) => {
    return {
        valueMainInput: state.movieListReducer.valueMainInput,
        changeTheme: state.movieListReducer.changeTheme
    }
};

const mapDispatchToProps = (dispatch)=>{
  return{
      onChangeMainInput:(value)=>dispatch({type:'CHANGE_MAIN_INPUT',payload:value}),
      movieSearch:()=>dispatch({type:'MOVIE_SEARCH'}),

  }
};


export const HeaderWithRedux = connect(mapStateToProps,mapDispatchToProps)(Header);
