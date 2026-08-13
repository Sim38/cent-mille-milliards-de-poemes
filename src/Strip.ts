export class Strip {
  readonly #pages: readonly string[];
  #currentPage: number;

  constructor(pages: string[], page: number = 1) {
    this.#pages = Object.freeze([...pages]);
    this.#currentPage = page;
  }

  get pages(): readonly string[] {
    return this.#pages;
  }

  get line(): string {
    return this.#pages[this.#currentPage - 1];
  }

  get currentPage(): number {
    return this.#currentPage;
  }

  page(pageNumber: number): string {
    this.#validatePage(pageNumber);

    return this.#pages[pageNumber - 1];
  }

  flip(pageNumber: number): string {
    this.#validatePage(pageNumber);

    this.#currentPage = pageNumber;
    return this.#pages[pageNumber - 1];
  }

  randomize(): this {
    const randomPage = Math.floor(Math.random() * this.#pages.length) + 1;
    this.flip(randomPage);

    return this;
  }

  #validatePage(pageNumber: number) {
    if (
      !Number.isInteger(pageNumber) ||
      pageNumber < 1 ||
      pageNumber > this.#pages.length
    ) {
      throw new RangeError(
        `Invalid Page Number. Expected 1-${this.#pages.length}`,
      );
    }
  }
}
