import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { Email } from "../../src/domain/entities/Email.ts";

Deno.test("should validate if email is valid", () => {
  const expectedEmail = "gi@gmail@com";
  assertThrows(() => Email.create(expectedEmail), Deno.errors.InvalidData);
});

Deno.test("should validate if email is grater 110 caracteres", () => {
  const expectedEmail =
    "gi@gmail.com.brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrdddddddddddddddddddddddddddddddddddddddddddddd";
  assertThrows(() => Email.create(expectedEmail), Deno.errors.InvalidData);
});

Deno.test("should return a email", () => {
  const expectedEmail = "gi@gmail.com";
  const email = Email.create(expectedEmail);
  assertEquals(email.value, expectedEmail);
});
