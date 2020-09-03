import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignUp from "./pages/sign-in/sign-in-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import './App.css';


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
            // addCollectionAndDocuments("collections",
            //     collectionsArray.map(({ title, items }) =>({ title, items })));

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
                    <Route exact path={"/checkout"} component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/' />
                            ) : (
                                <SignInSignUp />
                            )
                        }
                    />

                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // collectionsArray: selectCollectionsForPreview,
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
