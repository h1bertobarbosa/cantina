import { CustomerName } from "./CustomerName.ts";
import { Email } from "./Email.ts";
import { Entity } from "./Entity.ts";

type UserProps = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export class User extends Entity<UserProps> {
  #name: CustomerName;
  #email: Email;
  #phone: string;
  #password: string;

  private constructor(props: UserProps, id?: string) {
    super(props, id);
    this.#email = Email.create(props?.email || "");
    this.#name = CustomerName.create(props?.name || "");
    this.#phone = props?.phone || "";
    this.#password = props?.password || "";
  }

  static create(props: UserProps, id?: string) {
    return new User(props, id);
  }

  get name() {
    return this.#name.value;
  }

  get email() {
    return this.#email.value;
  }

  get phone() {
    return this.#phone;
  }

  get password() {
    return this.#password;
  }
}
