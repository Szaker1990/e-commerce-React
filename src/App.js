import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }
    unsubscribefromAuth = null

    componentDidMount() {
       this.unsubscribefromAuth = auth.onAuthStateChanged( user =>{
            this.setState({currentUser: user})

            console.log(user);
        })
    }
    componentWillUnmount() {
        this.unsubscribefromAuth();
    }
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path={"/shop"} component={ShopPage}/>
                    <Route path={"/signin"} component={SignInSignUp}/>
                </Switch>
            </div>
        );
    }
}
export default App;
