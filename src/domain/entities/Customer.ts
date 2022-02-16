import { CustomerName } from "./CustomerName.ts";
import { Email } from "./Email.ts";

export class Customer {
  #id: string;
  #name: CustomerName;
  #email: Email;
  #cellPhone: string;
  #centerName: string;

  constructor(
    data: Partial<
      {
        id: string;
        name: string;
        email: string;
        cell_phone: string;
        center_name: string;
      }
    >,
  ) {
    if (!data?.name) {
      throw new Deno.errors.InvalidData("O nome do cliente é obrigatório");
    }
    this.#id = data.id || "";
    this.#name = CustomerName.create(data.name || "");
    this.#email = Email.create(data.email || "");
    this.#cellPhone = data.cell_phone || "";
    this.#centerName = data.center_name || "";
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name.value;
  }

  get email() {
    return this.#email.value;
  }

  get cellPhone() {
    return this.#cellPhone;
  }

  get centerName() {
    return this.#centerName;
  }
}
