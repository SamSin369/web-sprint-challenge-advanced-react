import React, { useState } from "react";
import useForm from "../hooks/useForm";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  const [handleChanges, handleSubmit, values, showSuccessMessage] = useForm(
    initialValue
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor="firstName">
          First Name:
          <input
            name="firstName"
            id="firstName"
            value={values.firstName}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            name="lastName"
            id="lastName"
            value={values.lastName}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <label htmlFor="address">
          Address:
          <input
            id="address"
            name="address"
            value={values.address}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <label htmlFor="city">
          City:
          <input
            id="city"
            name="city"
            value={values.city}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <label htmlFor="state">
          State:
          <input
            id="state"
            name="state"
            value={values.state}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <label htmlFor="zip">
          Zip:
          <input
            name="zip"
            id="zip"
            value={values.zip}
            onChange={(event) => handleChanges(event)}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo!! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
