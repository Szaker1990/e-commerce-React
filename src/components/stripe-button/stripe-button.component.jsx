import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HMV3uCDE77r7tBkgi2utVcBYfa8d5W28KgbD4njX0DbjzRfMVgrZvpArU8TVPm1UO8j7bDwmqrnk124erpy4gcU00joHR6Zz9";
    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout label={"Pay Now"}
                        token={onToken}
                        stripeKey={publishableKey}
                        name={"Szaker Clothing"}
                        billingAddress
                        shippingAddress
                        image={"https://sendeyo.com/up/d/f3eb2117da"}
                        description={`Your total is $${price}`}
                        amount={priceForStripe}
                        panelLabel={"Pay now"}/>


    )
}
export default StripeCheckoutButton