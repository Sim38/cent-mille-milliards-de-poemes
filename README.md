# Cent mille milliards de poèmes (A Hundred Thousand Billion Poems)

This library provides a digital implementation of **Raymond Queneau**'s _Cent mille milliards de poèmes_. It models the book's ten sonnet strips, allowing you to read and flip individual strips, randomize the book, and generate the resulting poem.

_Cent mille milliards de poèmes_ is a book by Raymond Queneau containing 10 pages, each presenting a 14-line sonnet. Each line is printed on its own **strip**, allowing readers to flip the strip's **pages** independently and combine different lines to create new poems.

## Features

- Digital representation of the Book
- Flip individual strips to different pages
- Retrieve the poem represented by the current arrangement of strips
- Retrieve specific strips and its verse
- Randomize all strips' verse
- Language support for French and English

## Supported Languages

- French ([Source](https://bevrowe.info/Internet/Queneau/Queneau.html))
- English ([Source](https://bevrowe.info/Internet/Queneau/Queneau.html))

## Installation

```bash
npm i cent-mille-milliards-de-poemes
```

## Usage

### Initializing the book

The `Book()` constructor accepts an optional `Language` parameter to determine the language of the book. The default language is french.

```ts
import { Book, Language } from "cent-mille-milliards-de-poemes";

const book = new Book(Language.English);

console.log(book.poem); // Returns the poem of the current Strip configuration
console.log(book.poemLines); // Returns the poem of the current Strip configuration in an array
```

### Read specific Pages of a Strip

```ts
import { Book, Language } from "cent-mille-milliards-de-poemes";

const book = new Book(Language.English);

console.log(book.strip(2).page(5)); // he's cast out like a snobby Romeo (Strip 2, Page 5)
```

### Flip a Specific Strip to a Specific Page

```ts
import { Book, Language } from "cent-mille-milliards-de-poemes";

const book = new Book(Language.English);

book.strip(2).flip(6); // Flips the 2nd strip of the Book to page 6

console.log(book.strip(2).currentPage); // 6
console.log(book.strip(2).line); // enough to spur on any picaro
console.log(book.poem); // New poem with strip 2 being "enough to spur on any picaro"
```

### Randomize the Book

`book.randomize()` randomizes every strip to a random page.

```ts
import { Book, Language } from "cent-mille-milliards-de-poemes";

const book = new Book(Language.English);

book.randomize();

console.log(book.currentPages); // Random pages of each of the 14 strips
console.log(book.poem); // Poem corresponding to those strips' pages
```

`book.randomize()` returns the `Book` instance, so the result can also be chained.

```ts
console.log(book.randomize().poem); // New random poem
```

### currentPages

`book.currentPages` returns an array containing the current page number of each Strip. Index `0` corresponds to the first strip.

```ts
console.log(book.currentPages);
// [2, 5, 2, 9, 9, 9, 8, 4, 1, 3, 5, 4, 10, 5]
```

### Randomize a Specific Strip

`strip.randomize()` randomizes the Strip to a random page.

```ts
import { Book, Language } from "cent-mille-milliards-de-poemes";

const book = new Book(Language.English);

book.strip(1).randomize();

console.log(book.strip(1).line); // New random sonnet line
```

`strip.randomize()` returns the `Strip` instance, so the result can also be chained

```ts
console.log(book.strip(1).randomize().line); // New random sonnet line
```

## API

### Book

#### Constructor

```ts
new Book(language?: Language)
```

| Parameter  | Type       | Default           | Description              |
| ---------- | ---------- | ----------------- | ------------------------ |
| `language` | `Language` | `Language.French` | The language of the book |

#### Properties

| Property       | Type                | Description                            |
| -------------- | ------------------- | -------------------------------------- |
| `poem`         | `string`            | The current poem.                      |
| `poemLines`    | `readonly string[]` | The current poem as an array of lines. |
| `currentPages` | `readonly number[]` | The current page number of each strip. |
| `strips`       | `readonly Strip[]`  | The 14 strips of the book.             |

#### Methods

| Methods              | Parameters            | Return  | Description                                                     |
| -------------------- | --------------------- | ------- | --------------------------------------------------------------- |
| `strip(stripNumber)` | `stripNumber: number` | `Strip` | Returns a specific strip. stripNumber must be between 1 and 10. |
| `randomize()`        | -                     | `this`  | Randomize all strips to a random page.                          |

### Strip

#### Constructor

```ts
new Strip(pages: string[], pageNumber?: number)
```

| Parameter    | Type       | Default | Description                                 |
| ------------ | ---------- | ------- | ------------------------------------------- |
| `pages`      | `string[]` | -       | The 10 pages of the strip.                  |
| `pageNumber` | `number`   | 1       | The page number the strip is initialized to |

#### Properties

| Property      | Type                | Description                           |
| ------------- | ------------------- | ------------------------------------- |
| `currentPage` | `number`            | The Strip's current page.             |
| `line`        | `string`            | The line of the Strip's current page. |
| `pages`       | `readonly string[]` | The 10 pages of the Strip.            |

#### Methods

| Methods       | Parameters           | Return   | Description                                                          |
| ------------- | -------------------- | -------- | -------------------------------------------------------------------- |
| `page()`      | `pageNumber: number` | `string` | Returns the line of the strip's specified page.                      |
| `flip()`      | `pageNumber: number` | `string` | Flip the Strip to the specified page number and returns the new line |
| `randomize()` | -                    | `this`   | Randomize the Strip to a random page                                 |

### Language

Enum representing the supported languages.

| Value              | Description                  |
| ------------------ | ---------------------------- |
| `Language.French`  | French version of the book.  |
| `Language.English` | English version of the book. |
