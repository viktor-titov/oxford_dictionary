import { Domain } from "domain";
import { Region } from "./region";
import { Register } from "./register";

export interface Synonym {
    /** A level of language usage, typically with respect to formality. e.g. 'offensive', 'informal' */
    registers?: Register[];

    /** A particular area in which the pronunciation occurs, e.g. 'Great Britain' */
    regions?: Region[];

    /** A subject, discipline, or branch of knowledge particular to the Sense */
    domains: Domain[];

    id: string;

    language: string;

    text: string;
}