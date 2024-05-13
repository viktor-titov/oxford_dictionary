/** various types of notes that appear */
export interface Note {
    /** A note text */
    text: string;

    /** The descriptive category of the text */
    type: string;
    
    /** The identifier of the word */
    id: string;
}