import React,{ useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, SignInTitle, ButtonsBarContainer, ErrorMessage } from './sign-in.style';

const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const { email, password } = userCredentials
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            const clear = {
                email: "",
                password: ""
            }
            setUserCredentials(clear)
        } catch (error) {
            setErrorMsg(error.message)
        }
    };
    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    };
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        handleChange={handleChange}
                        label='password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton onClick={handleSubmit} type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
                {
                    errorMsg.length > 1 ? <ErrorMessage>{errorMsg}</ErrorMessage> : ""
                }
            </SignInContainer>
        );
}
export default SignIn;