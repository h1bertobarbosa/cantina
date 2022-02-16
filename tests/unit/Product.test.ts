import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.125.0/testing/asserts.ts";
import { Product } from "../../src/domain/entities/Product.ts";

Deno.test("should be create a product", () => {
  const expectedName = "Espetinho de carne";
  const expectedPrice = 8.5;
  const product = new Product({ name: expectedName, price: expectedPrice });
  assertEquals(product.name, expectedName);
  assertEquals(product.price, expectedPrice);
});

Deno.test("should validate if product have a name", () => {
  const expectedName = "";
  const expectedPrice = 8.5;
  assertThrows(
    () => new Product({ name: expectedName, price: expectedPrice }),
    Deno.errors.InvalidData,
  );
});

Deno.test("should validate if product have a price", () => {
  const expectedName = "Espetinho de carne";
  assertThrows(
    () => new Product({ name: expectedName }),
    Deno.errors.InvalidData,
  );
});
