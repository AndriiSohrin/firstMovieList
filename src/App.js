import React from 'react';
import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {HeaderWithRedux} from "./Components/Header/Header";
import {MoviesListWithRedux} from "./Components/MoviesLis/MoviesLis";
import {Provider} from "react-redux";
import {store} from "../src/Store/Store";
import {BrowserRouter, Route,Switch} from "react-router-dom";





function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <HeaderWithRedux/>

                <Switch>
                    <Route exact path='/' component={()=><h1>hello word</h1>}/>
                    <Route path='/movie/:id' component={MoviesListWithRedux}/>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
