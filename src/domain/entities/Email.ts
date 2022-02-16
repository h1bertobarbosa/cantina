export class Email {
  private static regexEmail = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/;
  private constructor(public readonly value: string) {}

  static create(email: string): Email {
    if (email) {
      if (!email.match(Email.regexEmail)) {
        throw new Deno.errors.InvalidData("Este não é um email válido");
      }
      if (email.length > 110) {
        throw new Deno.errors.InvalidData(
          "O email digitado esta muito grande, não pode ter mais que 110 caracteres",
        );
      }
    }

    return new Email(email);
  }
}
