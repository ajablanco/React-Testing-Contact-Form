import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test('renders App without crashing', () => {
  render(<App />);
});

test("First name is on the form", () => {
  // arrange 
  const { getByText } = render(< App/>); // render returns

  // act
  const firstName = getByText(/first name*/i);

  // assert that it is being rendered
  expect(firstName).toBeInTheDocument();
});



test('Email is on the form', () => {
  const { getByText } = render(<App />);

  const email = getByText(/email*/i);
  expect(email).toBeInTheDocument();
}); 


test('Last name is on the form', () => {
  const { getByText } = render(<App />);

  const lastName = getByText(/last name*/i);
  expect(lastName).toBeInTheDocument();
}); 


test('There is an email placeholder on the form', () => {
  const { getByPlaceholderText } = render(<App />)

  const email = getByPlaceholderText(/bluebill1049@hotmail.com/i)
  expect(email.placeholder).toBe('bluebill1049@hotmail.com')
})


test('A checkbox is on the form', () => {
  const { getByText } = render(<App />);

  const checkbox = getByText(/By checking the box below, you agree to the terms and conditions/i);
  expect(checkbox).toBeInTheDocument();
}); 