export abstract class Entity<T> {
  constructor(protected props: T, readonly id?: string) {
    this.id = id || globalThis.crypto.randomUUID();
  }
}
