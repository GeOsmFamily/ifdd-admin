import { Component, Input, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef, NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";
import { Datum } from "src/app/shared/osc";
import { ModalConfig } from "./modal.config";

@Component({
  selector: "app-modals",
  templateUrl: "./modals.component.html",
  styleUrls: ['./modals.scss']
})
export class ModalsComponent implements OnInit {
  heading = "Modals";
  subheading =
    "Wide selection of modal dialogs styles and animations available.";
  icon = "pe-7s-phone icon-gradient bg-premium-dark";

  closeResult: string;

 public modalConfig: ModalConfig
  @ViewChild('modal') private modalContent: TemplateRef<ModalsComponent>
  @Input() osc:Datum
  private modalRef: NgbModalRef
  modalOptions:NgbModalOptions;

  //calendar
model: NgbDateStruct;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { 
    this.modalConfig={
      modalTitle:"hhh",
      dismissButtonLabel: "annuler",
      closeButtonLabel: "annuler",
     
    }
  }
  
 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
    if (this.modalConfig.shouldClose === undefined || (await this.modalConfig.shouldClose())) {
      const result = this.modalConfig.onClose === undefined || (await this.modalConfig.onClose())
      this.modalRef.close(result)
    }
  }

  async dismiss(): Promise<void> {
    if (this.modalConfig.shouldDismiss === undefined || (await this.modalConfig.shouldDismiss())) {
      const result = this.modalConfig.onDismiss === undefined || (await this.modalConfig.onDismiss())
      this.modalRef.dismiss(result)
    }
  }
  }

  


