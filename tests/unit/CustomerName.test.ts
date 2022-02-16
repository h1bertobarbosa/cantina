import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { CustomerName } from "../../src/domain/entities/CustomerName.ts";

Deno.test("should validate if name is not empty", () => {
  const expectedName = " ";
  assertThrows(
    () => CustomerName.create(expectedName),
    Deno.errors.InvalidData,
  );
});

Deno.test("should validate if name is less 3 caracteres", () => {
  const expectedName = "oi";
  assertThrows(
    () => CustomerName.create(expectedName),
    Deno.errors.InvalidData,
  );
});

Deno.test("should return a email", () => {
  const expectedName = "Marina";
  const customerName = CustomerName.create(expectedName);
  assertEquals(customerName.value, expectedName);
});
