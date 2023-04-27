import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, map} from 'rxjs';

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

  msg: Mensaje;

  constructor(private db: AngularFireDatabase) {

    this.mensajesDB = this.db.list('/messages', (ref) =>

      ref.orderByChild('date')

    );

  }

  addMessage(usuario, fecha, text){

    this.mensajesDB.push({

      usuario: usuario,

      fecha: fecha,

      text: text,

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
