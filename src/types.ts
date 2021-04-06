export interface shipType {
    name: string;
    type: string;
    year: number;
    flag: string;
    dwt: number;
    images: string[]
}

export interface linkType {
    title: string;
    path: string;
}

export interface statementType {
    title: string;
    text: string;
    banner?: string;
}

export interface serviceType {
    title: string;
    text: string;
    banner?: string;
}

export interface serviceListType {
    [key: string]: serviceType;
}

export interface statementListType {
    [key: string]: statementType;
}


