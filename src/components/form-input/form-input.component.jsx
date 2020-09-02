import React from "react";
import {FormInputContainer, FormInputLabel, GroupContainer} from "./form-input.style";

const FormInput = ({ handleChange,label,...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
                (<FormInputLabel>
                    {label}
            </FormInputLabel>)
                : null
        }
    </GroupContainer>
)
export default FormInput