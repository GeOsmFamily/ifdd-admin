export interface OrganisationCivile {
    success: boolean;
    data: Datum[];
    message: string;
  }
  
  export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: Date;
        role: number;
        deleted_at?: any;
        created_at: Date;
        updated_at: Date;
    }

    export interface Pivot {
        osc_id: number;
        categorie_odd_id: number;
        description: string;
    }

    export interface CategorieOdd {
        id: number;
        category_number: string;
        intitule: string;
        id_odd: number;
        pivot: Pivot;
    }

    export interface ZoneIntervention {
        id: number;
        osc_id: number;
        name: string;
        longitude: string;
        latitude: string;
    }

    export interface Datum {
        id: number;
        name: string;
        abbreviation: string;
        numero_osc: string;
        pays: string;
        date_fondation: string;
        description: string;
        personne_contact: string;
        telephone: string;
        email_osc: string;
        site_web: string;
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
        longitude: string;
        latitude: string;
        siege: string;
        user_id: number;
        active: boolean;
        user: User;
        categorie_odds: CategorieOdd[];
        zone_interventions: ZoneIntervention[];
    }

   



  export interface SousCategory {
    id: number;
    nom: string;
    idcategorie: number;
    logourl?: any;
    deleted_at?: any;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Pivot {
    idCategorie: number;
    idCommodite: number;
  }
  
  export interface TypeCommodite {
    id: number;
    nom: string;
    deleted_at?: any;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface Commodite {
    id: number;
    nom: string;
    idTypeCommodite: number;
    deleted_at?: any;
    created_at: Date;
    updated_at: Date;
    pivot: Pivot;
    type_commodite: TypeCommodite;
  }
  
  export interface Datum {
    id: number;
    nom: string;
    logourl: string;
    deleted_at?: any;
    created_at: Date;
    updated_at: Date;
    shortname: string;
    vues: number;
    sous_categories: SousCategory[];
    commodites: Commodite[];
  }
  