import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useRef } from "react";
import "../styles/checkout.css";

const stripePromise = loadStripe(
  "pk_test_51MibSeAQeNycBLMEaUOcu9Zv4n2Ww4VEZbw77rky1pKgL0t5cU4zDMbFNJiVyoy6ugi0ZlgAdAabzAnYoKpYOfKt00crD3ZhHk"
);

const Checkout = () => {
  const location = useLocation();
  const [clientSecret, setClientSecret] = useState("");
  const fetchSecret = async () => {
    let res = await fetch(
      "http://localhost:3000/api/v1/payment/create-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 200 }),
      }
    );
    let data = await res.json();

    return data.secret;
  };
  useEffect(() => {
    // fetchSecret()
    //   .then((a) => {
    //     setClientSecret(a);
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //   });
    if (location.state) setClientSecret(location.state);
    console.log(location.state);
  }, [location]);

  //   const clientSecret = location.state || "a" + Math.random() + "";
  if (!clientSecret) <Navigate to={"/"} />;
  return (
    clientSecret && (
      <>
        <h1
          className="text-[40px] text-darkslategray-100 mx-10 my-7"
          style={{ fontWeight: "700" }}
        >
          Checkout
        </h1>
        <main className="my-10">
          <h1 className="w-[28vw] text-[28px] text-darkslategray-100 font-bold mx-auto my-6">
            Payment Details
          </h1>
          {clientSecret && (
            <Elements options={{ clientSecret }} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </main>
      </>
    )
  );
};

export default Checkout;

const CheckoutForm = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    setIsProcessing(true);

    setIsProcessing(true);
    e.preventDefault();
    setIsProcessing(false);

    const { paymentIntent, error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
      redirect: "if_required",
    });
    console.log({ paymentIntent });

    if (error) {
      setIsProcessing(false);
    }
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent.status);
    }
  };
  const ref = useRef();
  return (
    <div ref={ref} className="checkout-container">
      <form onSubmit={submitHandler} id="let">
        <PaymentElement />
        <div className="flex flex-col gap-2 ">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            className="outline-none bg-[#FFF9EC] px-4 py-2"
          />
        </div>
        <button
          className="w-full py-2 text-white bg-darkslategray-200"
          type="submit"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay"}
        </button>
      </form>
    </div>
  );
};
