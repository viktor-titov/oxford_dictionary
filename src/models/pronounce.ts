/** Possible pronunciation of a word */
export interface Pronounce {
    /** The alphabetic system used to display the phonetic spelling */
    phonetic?: string;

    /** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
    phoneticSpelling?: string;

    /** The URL of the sound file */
    audio?: string;

    /** A local or regional variation where the pronunciation occurs, e.g. 'British English' */
    dialects?: string[];

    /** A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal' */
    registers?: Register[];

    /** A particular area in which the pronunciation occurs, e.g. 'Great Britain' */
    regions?: Region[];
}



