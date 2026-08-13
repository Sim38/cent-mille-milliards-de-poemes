import bookDataByLanguage from "./language/data";
import { Language } from "./language/Language";
import { Strip } from "./Strip";

export class Book {
  #strips: Strip[];

  constructor(language: Language = Language.French) {
    const bookData = bookDataByLanguage[language];
    this.#strips = bookData.map((strip) => new Strip(strip));
  }

  get currentPages(): readonly number[] {
    return this.#strips.map((strip) => strip.currentPage);
  }

  get strips(): readonly Strip[] {
    return Object.freeze(this.#strips);
  }

  get poemLines(): readonly string[] {
    return this.#strips.map((strip) => strip.line);
  }

  get poem(): string {
    return this.poemLines.join("\n");
  }

  strip(stripNumber: number) {
    if (stripNumber < 1 || stripNumber > this.#strips.length) {
      throw new RangeError(
        `Invalid Strip Number. Expected 1-${this.#strips.length}.`,
      );
    }

    return this.#strips[stripNumber - 1];
  }

  randomize(): this {
    for (const strip of this.#strips) {
      strip.randomize();
    }
    return this;
  }
}
