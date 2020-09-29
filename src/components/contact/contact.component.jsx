import React, {useState} from "react";
import {WrappedMap} from "../map/map.component";
import {
    ContactContainer,
    ContactHeader,
    Form,
    FormInputBox,
    FormInputContainer, TextAreaComponent,
    TextAreaContainer
} from "./contact.style";
import Header from "../header/header.component";
import FormInput from "../form-input/form-input.component";
import {CustomButtonContainer} from "../custom-button/custom-button.style";

export const Contact = () => {
    const[contactData,setContactData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleChange = e => {
        const {name, value} = e.target
        setContactData({...contactData, [name]: value})
    };

    return (
        <ContactContainer>
            <ContactHeader>Możesz nas znaleść tutaj</ContactHeader>
            <WrappedMap
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                loadingElement={<div style={{height: `100%`, width: '100%'}}/>}
                containerElement={<div style={{height: `400px`, width: '50%'}}/>}
                mapElement={<div style={{height: `100%`, width: '100%'}}/>}
            />
            <ContactHeader>Lub skontaktuj sie z nami poprzez formularz</ContactHeader>
            <Form>
                    <FormInputBox>
                            <FormInput
                            type={"text"}
                            label={"Imie i Nazwisko"}
                            value={contactData.name}
                            name={"name"}
                            handleChange={handleChange}/>
                            <FormInput
                            type={"email"}
                            label={"Adres Email"}
                            value={contactData.email}
                            name={"email"}
                            handleChange={handleChange}/>
                    </FormInputBox>
                    <TextAreaContainer>
                        <label>Twoja Wiadomość</label>
                        <TextAreaComponent value={contactData.message}
                                           name={"message"}
                                           placeholder={"Miejsce na Twoja wiadomość"}
                                           handleChange={handleChange}/>
                    </TextAreaContainer>
                <CustomButtonContainer>Wyślij wiadomość</CustomButtonContainer>
            </Form>
        </ContactContainer>
    )
}