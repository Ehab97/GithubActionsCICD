/* globals describe, expect, it,test */
import { screen, waitFor, render, fireEvent } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { vi } from "vitest";

test("It shows Name and Email Inputs and Submit Button", async () => {
   //render Component
   render(<UserForm />);
   //manipulate the Component or find element in it
   const inputs = screen.getAllByRole("textbox");
   const button = screen.getByRole("button");
   //assertion make sure Component what it's suppose to doing
   expect(inputs).toHaveLength(2);
   expect(button).toBeInTheDocument();
});

// test("it shows when OnUserAdded submitted", async () => {
//   const mock=jest.fn();
//    //1-render Component
//    render(<UserForm onAddUser={cb} />);
//    //2-manipulate the Component or find element in it
//    const [nameInput, emailInput] = screen.getAllByRole("textbox");
//    user.click(nameInput);
//    user.keyboard("ehab");
//    user.click(emailInput);
//    user.keyboard("ehab@ehab.com");
//    const button = screen.getByRole("button");
//    user.click(button);
//    console.log({ argsList });
//    //3-assertion make sure Component what it's suppose to doing
//      expect(mock).toHaveBeenCalled();
//      expect(mock).toHaveBeenCalledWith({ name: "ehab", email: "ehab@ehab.com" });
// });

test("it shows when OnUserAdded submitted", async () => {
   ``;
   const mock = vi.fn();
   // 1. Render the Component
   render(<UserForm onAddUser={mock} />);

   // 2. Manipulate the Component or find elements in it
   const nameInput = screen.getByRole("textbox", {
      name: /Enter name/,
   });
   const emailInput = screen.getByRole("textbox", {
      name: /Enter email/,
   });

   // Simulate user interactions
   fireEvent.input(nameInput, { target: { value: "ehab" } });
   fireEvent.input(emailInput, { target: { value: "ehab@ehab.com" } });

   // Find and click the button
   const button = screen.getByRole("button");
   fireEvent.click(button);

   // 3. Assertion: Make sure the Component does what it's supposed to do
   expect(mock).toHaveBeenCalled();
   expect(mock).toHaveBeenCalledWith({ name: "ehab", email: "ehab@ehab.com" });
});

test("empty two inputs when form submitted", () => {
   const mock = vi.fn();
   // 1. Render the Component
   render(<UserForm onAddUser={mock} />);

   // 2. Manipulate the Component or find elements in it
   const nameInput = screen.getByRole("textbox", {
      name: /Enter name/,
   });
   const emailInput = screen.getByRole("textbox", {
      name: /Enter email/,
   });

   // Simulate user interactions
   fireEvent.input(nameInput, { target: { value: "ehab" } });
   fireEvent.input(emailInput, { target: { value: "ehab@ehab.com" } });

   // Find and click the button
   const button = screen.getByRole("button");
   fireEvent.click(button);

   // 3. Assertion: Make sure the Component does what it's supposed to do
   expect(nameInput).toHaveValue("");
   expect(emailInput).toHaveValue("");
});
