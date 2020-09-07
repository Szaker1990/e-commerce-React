import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import { SignUpContainer, SignUpTitle } from "./sign-up.style";

const SignUp = () => {
    const [ userData, setUserData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const handleSubmit = async event => {
        event.preventDefault()
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }
        try {
            const  { user }  = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            const clear = {
                displayName : "",
                email: "",
                password: "",
                confirmPassword: ""
            };
            setUserData(clear)
        }catch (error) {
            console.log(error);
        }
    };
    const handleChange = e => {
        const {name, value} = e.target
        setUserData({...userData, [name]: value})
    };
        const {displayName, email, password, confirmPassword} = userData
        return(
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span> Sign up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type={"text"}
                        name={"displayName"}
                        value={displayName}
                        onChange={handleChange}
                        label={"displayName"}
                        required />
                    <FormInput
                        type={"email"}
                        name={"email"}
                        value={email}
                        onChange={handleChange}
                        label={"email"}
                        required />
                    <FormInput
                        type={"password"}
                        name={"password"}
                        value={password}
                        onChange={handleChange}
                        label={"Password"}
                        required />
                    <FormInput
                        type={"password"}
                        name={"confirmPassword"}
                        value={confirmPassword}
                        onChange={handleChange}
                        label={"Confirm Password"}
                        required />
                        <CustomButton type={"submit"}>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
};
export default SignUp