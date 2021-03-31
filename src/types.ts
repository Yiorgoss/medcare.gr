export interface statementType {
    title: string;
    text: string;
}

export interface shipType {
    name: string;
    type: string;
    year: number;
    flag: string;
    dwt: number;
    images: string[]
}

export interface statementListType {
    [key: string]: statementType;
}


