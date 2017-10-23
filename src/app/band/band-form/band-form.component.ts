import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BandModel } from './../shared/band-model';

@Component({
  selector: 'app-band-form',
  templateUrl: './band-form.component.html',
  styleUrls: ['./band-form.component.css']
})
export class BandFormComponent implements OnInit {

  form: FormGroup;
  @Input()
  model: BandModel;

  constructor() { }

  ngOnInit() {
    this.model = new BandModel();
    this.initialiseForm();
  }

  public initialiseForm() {    
    this.form = new FormGroup({
      'name': new FormControl(this.model.name, [Validators.required]),
      'foundationDate': new FormControl(this.model.foundationDate)
    });
  }

  public isValid(){
    return this.form.valid;
  }

  public getValue(){
    return this.form.value;
  }

  public setItem(item: BandModel){
    this.model = item;
    this.initialiseForm();
  }

}
