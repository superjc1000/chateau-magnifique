import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map, mergeScan } from 'rxjs';

export interface Mensaje{

  usuario: string;
  fecha: Date; //cambiar a string
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private mensajesDB: AngularFireList<Mensaje>;

 

  constructor(private db: AngularFireDatabase) {

    this.mensajesDB = this.db.list('/messages', (ref) =>

      ref.orderByChild('date')

    );

 


  }

  addMessage(msg: Mensaje){

    this.mensajesDB.push({

      usuario: msg.usuario,

      fecha: msg.fecha,

      text: msg.text,

    });

    console.log("ta ueno");

  }
  getMensajes(): Observable<Mensaje[]> {

    return this.mensajesDB.snapshotChanges().pipe(

      map((changes) =>

        changes.map((c) => this.getUserFromPayload(c.payload))

      )

    );

  }

 

  getUserFromPayload(payload: any): Mensaje{

    return {

      $key: payload.key,

      ...payload.val(),

    };

  }
}
