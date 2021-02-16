import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IK54oKB2HONfRFAaLooF1TnO1fsTchrSqiTJJwMIUx3hSXk1ZbQIT4vh5W22Lzve6KXb6uPnCjCJ6mCoCWxIVNx00DAfUHUFb";
  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "There was an issue with your payment. Please sure tou use provided credit card"
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
