export class CustomerName {
  private constructor(public readonly value: string) {
  }

  static create(name: string): CustomerName {
    if (!name) {
      throw new Deno.errors.InvalidData("O nome é obrigatório");
    }

    if (name.length < 3) {
      throw new Deno.errors.InvalidData(
        "O nome do cliente deve ter no mínimo 3 letras",
      );
    }

    return new CustomerName(name.trim());
  }
}
