import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import {SignUpSignInContainer} from "./sign-in-sign-up.style";

const SignInSignUp = () => (
    <SignUpSignInContainer>
        <SignIn/>
        <SignUp/>
    </SignUpSignInContainer>
)
export default SignInSignUp