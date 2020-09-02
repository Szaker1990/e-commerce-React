import React from "react";
import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";
import {CheckoutContainer, ImageContainer, ProductImage, NameSpan,
    QuantitySpan,ArrowContainer,ValueSpan,
    RemoveButtonContainer} from "./checkout-item.style";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CheckoutContainer>
            <ImageContainer>
                <ProductImage src={imageUrl} alt={"item"}/>
            </ImageContainer>
            <NameSpan>{name}</NameSpan>
            <QuantitySpan>
                <ArrowContainer className={"arrow"} onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
                <ValueSpan>
                    {quantity}
                </ValueSpan>
                <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
            </QuantitySpan>
            <NameSpan >${price}</NameSpan>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem)