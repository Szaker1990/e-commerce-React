import React from "react";
import { WrappedMap } from "../map/map.component";
import {ContactContainer, ContactHeader} from "./contact.style";
import Header from "../header/header.component";

export const Contact = () => {

    return(
        <ContactContainer>
            <ContactHeader>Mozesz nas znaleść tutaj</ContactHeader>
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
                        loadingElement={<div style={{ height: `100%`, width: '100%' }} />}
                        containerElement={<div style={{ height: `400px`,width: '50%' }} />}
                        mapElement={<div style={{ height: `100%`,width: '100%' }} />}
            />
        </ContactContainer>
    )
}