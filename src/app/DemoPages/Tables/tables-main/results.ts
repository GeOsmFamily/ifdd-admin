import { Datum } from "src/app/shared/osc";

export interface Results {

    success:boolean;
    message:string;
    data: Data;
   
      }

  export interface Data{
      data:Datum[]
    current_page?:number;
    next_page?:string;
    prev_page:string;
     total?: number;
     number_per_page?:number;
     last_page:number;
     
 
  }