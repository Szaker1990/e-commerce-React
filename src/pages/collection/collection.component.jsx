import React from "react"
import {connect} from "react-redux"
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {CollectionContainer, CollectionHeader, CollectionItems} from "./collection.style";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (
        <CollectionContainer className={"collection-page"}>
            <CollectionHeader className={"title"}>{title}</CollectionHeader>
            <CollectionItems className={"items"}>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </CollectionItems>
        </CollectionContainer>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)