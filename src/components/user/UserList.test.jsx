/* globals describe, expect, it,test */
import { screen, waitFor, render, fireEvent, within } from "@testing-library/react";
import UserList from "./UserList";
import { vi } from "vitest";

function renderComponents() {
   const users = [
      {
         name: "ehab",
         email: "ehab@ehab.com",
      },
   ];
   //render Component
   const { container } = render(<UserList users={users} />);
   return {
      users,
      container,
   };
}

test("render one row per user", () => {
   //render Component
   const { container } = renderComponents();
   //manipulate the Component or find element in it
   //find all rows in table
   //    const rows = within(screen.getByTestId("users")).getAllByRole("row");
   const rows = container.querySelectorAll("tbody tr");
   //assertion make sure Component what it's suppose to doing
   expect(rows).toHaveLength(1);
});

test("render email and name for each user", () => {
   //render Component
   const { users } = renderComponents();
   //manipulate the Component or find element in it
   for (let user of users) {
      const name = screen.getByRole("cell", {
         name: user.name,
      });
      const email = screen.getByRole("cell", {
         name: user.email,
      });
      expect(name).not.toBeInTheDocument();
      expect(email).toBeInTheDocument();
   }
   //assertion make sure Component what it's suppose to doing
});
