import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, CollectionPreviewTitle, PreviewContainer} from "./preview-collection.style";

const PreviewCollection = ({ title ,items}) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <PreviewContainer>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)
export default PreviewCollection;