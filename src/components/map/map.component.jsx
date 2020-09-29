import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
    return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat:52.237049, lng:21.017532 }} text={"Our Store"}/>
    )
}
export const WrappedMap = withScriptjs(withGoogleMap(Map));