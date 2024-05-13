import { Domain } from "domain";
import { Example } from "./example";
import { Region } from "./region";
import { Register } from "./register";
import { Antonym } from "./antonym";
import { Synonym } from "./synonym";
import { Translation } from "./translation";

export interface Sense {
    /** A list of statements of the exact meaning of a word */
    definitions: string[];

    /** The origin of the word and the way in which its meaning has changed throughout history */
    etymologies: string[];

    /** A list of short statements of the exact meaning of a word */
    shortDefinitions: string[];

    /** A list of written or spoken rendering of examples of use of a word or text */
    examples: Example[];

    /** A list of written or spoken rendering of the meaning of a word or text in another language(s) */
    translations: Translation[];

    antonyms: Antonym[];

    synonyms: Synonym[];

    /** A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal' */
    registers?: Register[];

    /** A particular area in which the pronunciation occurs, e.g. 'Great Britain' */
    regions?: Region[];

    /** A subject, discipline, or branch of knowledge particular to the Sense */
    domains: Domain[];
}