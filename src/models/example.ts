import { Collocation } from "./collocations";
import { Note } from "./note";
import { Translation } from "./translation";

export interface Example {
    text: string;

    /** A list of written or spoken rendering of the meaning of a word or text in another language(s) */
    translations: Translation[];

    /** A list of statements of the exact meaning of a word */
    definitions: string[];

    /** Words or terms that co-occur */
    collocations: Collocation[];

    /** various types of notes that appear */
    notes: Note[];
}