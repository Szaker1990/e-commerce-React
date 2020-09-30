import React, {useState} from "react";
import {WrappedMap} from "../map/map.component";
import {
    ContactContainer,
    ContactHeader,
    Form,
    FormInputBox,
    TextAreaComponent,
    TextAreaContainer
} from "./contact.style";
import FormInput from "../form-input/form-input.component";
import {CustomButtonContainer} from "../custom-button/custom-button.style";

export const Contact = () => {
    const [contactData, setContactData] = useState({
        name: "",
        email: "",
    })
    const [textArea, setTextArea] = useState("")
    const handleChange = e => {
        const {name, value} = e.target
        setContactData({...contactData, [name]: value})
    };
    const handleSubmit = e => {
        e.preventDefault()
        setContactData({
            name: "",
            email: ""
        })
        setTextArea("")
        alert("Your data was send correctly")
    }
    const handleTextArea = (e) => {
        setTextArea(e.target.value)
    }

    return (
        <ContactContainer>
            <ContactHeader>You can find us here</ContactHeader>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                    process.env.REACT_APP_GOOGLE_KEY
                }`}
                loadingElement={<div style={{height: `100%`, width: '100%'}}/>}
                containerElement={<div style={{height: `400px`, width: '50%'}}/>}
                mapElement={<div style={{height: `100%`, width: '100%'}}/>}
            />
            <ContactHeader>Contact us via email</ContactHeader>
            <Form onSubmit={handleSubmit}>
                <FormInputBox>
                    <FormInput
                        type={"text"}
                        label={"Name & Surname"}
                        value={contactData.name}
                        name={"name"}
                        onChange={handleChange}/>
                    <FormInput
                        type={"email"}
                        label={"Email Adress"}
                        value={contactData.email}
                        name={"email"}
                        onChange={handleChange}/>
                </FormInputBox>
                <TextAreaContainer>
                    <label>Your Message</label>
                    <TextAreaComponent
                        value={textArea}
                        placeholder={"Place for your message"}
                        onChange={handleTextArea}/>

                </TextAreaContainer>
                <CustomButtonContainer style={{width: "300px", alignSelf: "center"}}>Send
                    Message</CustomButtonContainer>
            </Form>
        </ContactContainer>
    )
}