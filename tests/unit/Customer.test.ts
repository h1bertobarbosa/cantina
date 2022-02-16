import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { Customer } from "../../src/domain/entities/Customer.ts";

Deno.test("should be create a customer", () => {
  const expectedName = "Giordano";
  const expectedEmail = "gi@gmail.com";
  const expectedPhone = "(48)899997777";
  const expectedCenterName = "NED";
  const customer = new Customer({
    name: expectedName,
    email: expectedEmail,
    cell_phone: expectedPhone,
    center_name: expectedCenterName,
  });
  assertEquals(customer.name, expectedName);
  assertEquals(customer.email, expectedEmail);
  assertEquals(customer.cellPhone, expectedPhone);
  assertEquals(customer.centerName, expectedCenterName);
});

Deno.test("should validate if custumer have a name", () => {
  const expectedName = "";
  const expectedEmail = "gi@gmail.com";
  const expectedPhone = "(48)899997777";
  const expectedCenterName = "NED";

  assertThrows(() =>
    new Customer({
      name: expectedName,
      email: expectedEmail,
      cell_phone: expectedPhone,
      center_name: expectedCenterName,
    }), Deno.errors.InvalidData);
});
