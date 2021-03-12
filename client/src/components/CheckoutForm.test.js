import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText("Checkout Form");
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name:/i);
  userEvent.type(firstNameInput, "Sam");

  const lastNameInput = screen.getByLabelText(/Last Name:/i);
  userEvent.type(lastNameInput, "Singer");

  const addressInput = screen.getByLabelText(/Address:/i);
  userEvent.type(addressInput, "312 laura ct.");

  const cityInput = screen.getByLabelText(/city:/i);
  userEvent.type(cityInput, "Reno");

  const stateInput = screen.getByLabelText(/state:/i);
  userEvent.type(stateInput, "Nevada");

  const zipInput = screen.getByLabelText(/zip:/i);
  userEvent.type(zipInput, "98521");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const firstNameText = await screen.findByText(/Sam/i);
  const lastNameText = await screen.findByText(/Singer/i);
  const addressText = await screen.findByText(/312 laura ct./i);
  const cityText = await screen.findByText(/Reno/i);
  const stateText = await screen.findByText(/Nevada/i);
  const zipText = await screen.findByText(/98521/i);

  //   const successMessage = screen.getByLabelText(
  //     "You have ordered some plants! Woo-hoo!! 🎉Your new green friends will be shipped to:"
  //   );
  expect(firstNameText).toBeInTheDocument();
  expect(lastNameText).toBeInTheDocument();

  expect(addressText).toBeInTheDocument();
  expect(cityText).toBeInTheDocument();
  expect(stateText).toBeInTheDocument();
  expect(zipText).toBeInTheDocument();
  //   expect(successMessage).toBeInTheDocument();
});
