import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import {DirectoryContainer} from "./directory.style";

const Directory = ({sections}) => {
        return(
            <DirectoryContainer>
                {
                    sections.map(({id,...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </DirectoryContainer>
        )
};
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);