

    export interface CategorieOdd {
        id: number;
        category_number: string;
        intitule: string;
        id_odd: number;
    }

    export interface Data {
        id: number;
        name: string;
        number: string;
        number_categorie: number;
        logo_odd: string;
        color: string;
        categorie_odd: CategorieOdd[];
    }

    export interface OddInterface {
        success: boolean;
        data: Data[];
        message: string;
    }

