import React from "react";
import { CartItemContainer,CartItemImg,ItemDetails,Name } from "./cart-item.style";

const CartItem = ({ item: { imageUrl, price, name, quantity}}) =>(
    <CartItemContainer>
        <CartItemImg src={imageUrl} alt={"item"}/>
        <ItemDetails>
            <Name>{name}</Name>
            <Name>{quantity} x ${price}</Name>
        </ItemDetails>
    </CartItemContainer>
)
export default CartItem