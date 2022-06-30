import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateFormatHelperService {
  private datePipe = new DatePipe('en-US');
  constructor(private ngbDateParserFormatter: NgbDateParserFormatter) {
  }
  public parsengbDate(value: string): NgbDateStruct {
    let returnVal: NgbDateStruct;
  
    if (!value) {
     returnVal = null;
    } else {
       try {
         const dateParts = this.datePipe.transform(value, 'MM-dd-yyyy').split('-');
         returnVal = { year: Number(dateParts[2]), month: 
         Number(dateParts[0]), day: Number(dateParts[1]) };
       } catch (e) {
         returnVal = null;
       }
     }
      return returnVal;
    }
}
