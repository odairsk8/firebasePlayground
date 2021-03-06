import { Observable } from 'rxjs/Observable';
import { BandModel } from './../shared/band-model';
import { Component, OnInit } from '@angular/core';
import { BandService } from '../shared/band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  list : Observable<BandModel[]>;

  constructor(private bandService: BandService,
    private router: Router) { }

  ngOnInit() {
    this.list = this.bandService.getAll();
  }

  delete(key: string){
    this.bandService.remove(key);
  }

}
