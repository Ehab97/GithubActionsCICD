/* globals describe, expect, it,test */
import { screen, waitFor, render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import { vi } from "vitest";
import App from "./App";

test("can receive a new user and show it on list", () => {
   const user = {
      name: "ehab",
      email: "ehab@ehab.com",
   };
   //render
   render(<App />);
   //manipulate the Component or find element in it
   const nameInput = screen.getByRole("textbox", {
      name: /Enter name/,
   });
   const emailInput = screen.getByRole("textbox", {
      name: /Enter email/,
   });

   // Simulate user interactions
   fireEvent.input(nameInput, { target: { value: user.name } });
   fireEvent.input(emailInput, { target: { value: user.email } });

   // Find and click the button
   const button = screen.getByRole("button");
   fireEvent.click(button);
   const name = screen.getByRole("cell", {
      name: user.name,
   });
   const email = screen.getByRole("cell", {
      name: user.email,
   });
   //assertion make sure Component what it's suppose to doing
   expect(name).toBeInTheDocument();
   expect(email).toBeInTheDocument();
});
