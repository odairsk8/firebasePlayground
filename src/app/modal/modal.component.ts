import { NgModalModule, Modal } from 'ng-modal';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('myModal') modal : Modal;

  constructor() { }

  ngOnInit() {
  }
  open(){
    this.modal.open();
  }

}
