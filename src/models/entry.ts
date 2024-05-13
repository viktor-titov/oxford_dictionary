import { GrammaticalFeatures } from "./grammatical_features";
import { Inflection } from "./inflection";
import { LexicalCategory } from "./lexical_category";
import { Note } from "./note";
import { Pronounce } from "./pronounce";
import { Sense } from "./sense";

export interface Entry {
    /** IANA language code */
    language: string;

    /** A list of possible pronunciations of a word */
    pronunciations: Pronounce[];

    /** A linguistic category of words, generally defined by the syntactic or morphological behaviour 
     * of the lexical item in question, such as noun or verb */
    lexicalCategory: LexicalCategory; 

    /** A list of inflected forms for a lexicalEntry. */
    inflections: Inflection[];

    etymologies: string[];

    /** The different forms are correlated with meanings or functions which we text as 'features' */
    grammaticalFeatures: GrammaticalFeatures[];

    /** Complete list of senses */
    senses: Sense[];

    /** various types of notes that appear */
    notes: Note[];
}
