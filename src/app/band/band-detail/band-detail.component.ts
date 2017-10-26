import { Router, ActivatedRoute, Params } from '@angular/router';
import { BandService } from './../shared/band.service';
import { BandModel } from './../shared/band-model';
import { BandFormComponent } from './../band-form/band-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireObject, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.css']
})
export class BandDetailComponent implements OnInit {

  @ViewChild(BandFormComponent)
  form: BandFormComponent;
  item: BandModel;
  formState: string;
  key: string;

  constructor(private bandService: BandService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.verifyState();
  }

  verifyState() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if (id != null) {
        this.bandService.getItem(id).subscribe(result => {
          this.setState('edit', id);
          this.form.setItem(result);
        });
      }
      else {
        this.setState('new', '');
      }
    });
  }

  setState(state: string, key: string) {
    this.formState = state;
    this.key = key;
  }

  getState() {
    return this.formState;
  }

  save() {
    if (this.form.isValid()) {
      let band: BandModel = { ... this.form.getValue() };

      if (this.getState() == 'new') {
        this.bandService.add(band).then(result => {
          this.router.navigate(["/band"]);
        });
      } else if (this.getState() == 'edit') {
        this.bandService.update(this.key, band).then(result => {
          this.router.navigate(["/band"]);
        });
      }
    }
  }

}
