

    export interface Odd {
        id: number;
        name: string;
        number: string;
        number_categorie: number;
        logo_odd: string;
        color: string;
    }

    export interface Cible {
        id: number;
        category_number: string;
        intitule: string;
        id_odd: number;
        odd: Odd;
    }

    export interface CategoriesOdd {
        success: boolean;
        data: Cible[];
        message: string;
    }

