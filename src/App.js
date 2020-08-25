import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in/sign-in-sign-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path={"/shop"} component={ShopPage}/>
                <Route path={"/signin"} component={SignInSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
