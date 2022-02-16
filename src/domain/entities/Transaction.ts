import { Customer } from "./Customer.ts";
import { Entity } from "./Entity.ts";
import { User } from "./User.ts";

export enum TransactionOperation {
  Debt = 1,
  Credit,
}

type TransactionProps = {
  customer: Customer;
  user: User;
  value: number;
  description: string;
  operation: "Credit" | "Debt";
};
export class Transaction extends Entity<TransactionProps> {
  #customer: Customer;
  #user: User;
  #value: number;
  #description: string;
  #operation: number;
  constructor(props: TransactionProps, id?: string) {
    super(props, id);
    this.#customer = this.props.customer;
    this.#user = this.props.user;
    this.#value = this.props.value;
    this.#description = this.props.description;
    this.#operation = TransactionOperation[this.props.operation];
  }

  static create(props: TransactionProps, id?: string) {
    if (props.value <= 0) {
      throw new Deno.errors.InvalidData(
        "O valor não pode ser menor ou igual a 0",
      );
    }
    if (!props.description) {
      throw new Deno.errors.InvalidData("A descrição não pode ser vazia");
    }
    return new Transaction(props, id);
  }

  get operation() {
    return TransactionOperation[this.#operation];
  }
}
