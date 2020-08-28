import React from "react";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom"

const ShopPage = ({ match }) => {
    return (
        <div className={"shop-page"}>
            <Route exact path={`${match.path}`}/>
        </div>
    )
}
export default ShopPage;