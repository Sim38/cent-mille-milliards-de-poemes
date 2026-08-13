import { Language } from "./Language";
import english from "./english.json";
import french from "./french.json";

const bookDataByLanguage: Record<Language, string[][]> = {
  [Language.English]: english,
  [Language.French]: french,
};

export default bookDataByLanguage;
