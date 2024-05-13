import { Domain } from "./domain";
import { LexicalCategory } from "./lexical_category";
import { Pronounce } from "./pronounce";
import { Region } from "./region";
import { Register } from "./register";

/**
 * Inflection refers to a process of word formation in which items are added to the base form of a word to express grammatical meanings. The word "inflection" comes from the Latin inflectere, meaning "to bend."
 * 
 * Inflections in English grammar include the genitive 's; the plural -s; the third-person singular -s; the past tense -d, -ed, or -t; the negative particle 'nt; -ing forms of verbs; the comparative -er; and the superlative -est. While inflections take a variety of forms, they are most often prefixes or suffixes. They are used to express different grammatical categories. For example, the inflection -s at the end of dogs shows that the noun is plural. The same inflection -s at the end of runs shows that the subject is in the third-person singular (s/he runs). The inflection -ed is often used to indicate the past tense, changing walk to walked and listen to listened. In this way, inflections are used to show grammatical categories such as tense, person, and number.
 */
export interface Inflection {
    /** Canonical form of an inflection */
    inflectedForm: string;

    /** A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb */
    lexicalCategory: LexicalCategory;

    /** A list of possible pronunciations of a word */
    pronunciations: Pronounce[];

    /** A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal' */
    registers?: Register[];

    /** A particular area in which the pronunciation occurs, e.g. 'Great Britain' */
    regions?: Region[];

    /** A subject, discipline, or branch of knowledge particular to the Sense */
    domains: Domain[];
}