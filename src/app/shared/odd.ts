

    export interface CategorieOdd {
        id: number;
        category_number: string;
        intitule: string;
        id_odd: number;
    }

    export interface Odds{
        id: number;
        name: string;
        number: string;
        number_categorie: number;
        logo_odd: string;
        color: string;
        count_osc: number;
        categorie_odd: CategorieOdd[];
    }

    export interface ListeOdd {
        success: boolean;
        data: Odds[];
        message: string;
    }

