import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { Customer } from "../../src/domain/entities/Customer.ts";
import { Transaction } from "../../src/domain/entities/Transaction.ts";
import { User } from "../../src/domain/entities/User.ts";

Deno.test("should be create a transaction type debt", () => {
  const operation = "Debt";
  const customer = new Customer({
    name: "customer",
    email: "customer@gmail.com",
    cell_phone: "(48)89999-7777",
    center_name: "ned",
  });
  const user = User.create({
    name: "username",
    email: "user@gmail.com",
    phone: "(48)89999-7777",
    password: "expectedPassword",
  });
  const transaction = Transaction.create({
    customer,
    user,
    operation,
    value: 29.50,
    description: "Espetinho",
  });
  assertEquals(operation, transaction.operation);
});

Deno.test("should be create a transaction type credit", () => {
  const operation = "Credit";
  const customer = new Customer({
    name: "customer",
    email: "customer@gmail.com",
    cell_phone: "(48)89999-7777",
    center_name: "ned",
  });
  const user = User.create({
    name: "username",
    email: "user@gmail.com",
    phone: "(48)89999-7777",
    password: "expectedPassword",
  });
  const transaction = Transaction.create({
    customer,
    user,
    operation,
    value: 29.50,
    description: "Espetinho",
  });
  assertEquals(operation, transaction.operation);
});

Deno.test("value of transaction can not less than 0", () => {
  const operation = "Credit";
  const customer = new Customer({
    name: "customer",
    email: "customer@gmail.com",
    cell_phone: "(48)89999-7777",
    center_name: "ned",
  });
  const user = User.create({
    name: "username",
    email: "user@gmail.com",
    phone: "(48)89999-7777",
    password: "expectedPassword",
  });

  assertThrows(
    () =>
      Transaction.create({
        customer,
        user,
        operation,
        value: -1,
        description: "Espetinho",
      }),
    Deno.errors.InvalidData,
  );
});

Deno.test("value of transaction can not 0", () => {
  const operation = "Credit";
  const customer = new Customer({
    name: "customer",
    email: "customer@gmail.com",
    cell_phone: "(48)89999-7777",
    center_name: "ned",
  });
  const user = User.create({
    name: "username",
    email: "user@gmail.com",
    phone: "(48)89999-7777",
    password: "expectedPassword",
  });

  assertThrows(
    () =>
      Transaction.create({
        customer,
        user,
        operation,
        value: 0,
        description: "Espetinho",
      }),
    Deno.errors.InvalidData,
  );
});

Deno.test("description of transaction can not be empty", () => {
  const operation = "Credit";
  const customer = new Customer({
    name: "customer",
    email: "customer@gmail.com",
    cell_phone: "(48)89999-7777",
    center_name: "ned",
  });
  const user = User.create({
    name: "username",
    email: "user@gmail.com",
    phone: "(48)89999-7777",
    password: "expectedPassword",
  });

  assertThrows(
    () =>
      Transaction.create({
        customer,
        user,
        operation,
        value: 0,
        description: "",
      }),
    Deno.errors.InvalidData,
  );
});
