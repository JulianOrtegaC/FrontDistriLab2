import { Materias } from "./Materias";


export interface ResponseMateriasByCode {
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    isFaulted: boolean;
    isCanceled: boolean;
    result: Materias;
    statusStudent: string;
    genderStudent: string;
}
