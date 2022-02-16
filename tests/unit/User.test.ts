import { assertEquals } from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { User } from "../../src/domain/entities/User.ts";

Deno.test("should return a user", () => {
  const expectedName = "joaozinho";
  const expectedEmail = "gi@gmail.com";
  const expectedPhone = "(48)99999-8888";
  const expectedPassword = "123456";
  const user = User.create({
    name: expectedName,
    email: expectedEmail,
    phone: expectedPhone,
    password: expectedPassword,
  });
  assertEquals(user.name, expectedName);
  assertEquals(user.email, expectedEmail);
  assertEquals(user.phone, expectedPhone);
});
