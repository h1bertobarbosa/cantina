export class Product {
  #id: string;
  #name: string;
  #price: number;

  constructor(
    data: Partial<{
      name: string;
      price: number;
      id: string;
      created_at: string;
      updated_at: string;
    }>,
  ) {
    this.#id = data.id || "";
    if (!data?.name) {
      throw new Deno.errors.InvalidData("O nome do produto é obrigatório");
    }
    if (!data?.price || data?.price <= 0) {
      throw new Deno.errors.InvalidData("O preço do produto é obrigatório");
    }
    this.#name = data.name || "";
    this.#price = Number(data.price || 0);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get price() {
    return this.#price;
  }
}
