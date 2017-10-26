import { BandModel } from './band-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class BandService {

    private path = "bands";

    itemsRef: AngularFireList<BandModel>;
    items: Observable<BandModel[]>;

    itemRef:  AngularFireObject<BandModel>;
    item: Observable<BandModel>;

    constructor(private dbRealTime: AngularFireDatabase) { 
        this.itemsRef = this.dbRealTime.list(this.path);
        this.items = this.itemsRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
          });
    }

    public getAll(){
        return this.items;
    }

    public getItem(id: string){
        this.itemRef = this.dbRealTime.object( this.path + '/' + id)
        this.item = this.itemRef.valueChanges();
        return this.item;
    }

    public add(band: BandModel){
        return this.itemsRef.push(band);
    }

    public update(key: string, band: BandModel){
        return this.itemRef.update(band);
    }

    public remove(key: string){
        this.itemsRef.remove(key);
    }

}