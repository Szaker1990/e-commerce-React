import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total, WarningMessage} from "./checkout.style";

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )}
        <Total>
            <span>Total ${total}</span>
        </Total>
        <WarningMessage>*Please use the following test credit card for payments
        <br/>Nr: 4242 4242 4242 4242 - Exp: 01/2023 - CVV:123</WarningMessage>
        <StripeCheckoutButton price={total}/>
    </CheckoutContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage)