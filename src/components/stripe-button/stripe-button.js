import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IK54oKB2HONfRFAaLooF1TnO1fsTchrSqiTJJwMIUx3hSXk1ZbQIT4vh5W22Lzve6KXb6uPnCjCJ6mCoCWxIVNx00DAfUHUFb";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress=""
      shippingAddress=""
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
