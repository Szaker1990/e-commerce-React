import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"

class App extends Component {
    unsubscribefromAuth = null

    componentDidMount() {
        const {setCurrentUser} = this.props
       this.unsubscribefromAuth = auth.onAuthStateChanged( async userAuth =>{
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                        })
                    });
                }

            setCurrentUser(userAuth);

            })
    }
    componentWillUnmount() {
        this.unsubscribefromAuth();
    }
    render() {
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
}
const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
