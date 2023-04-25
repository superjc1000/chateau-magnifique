import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

export interface Mensaje{

  user: string;
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

 

    this.mensajesDB.push({

      user: 'sam',

      fecha: new Date(),

      text: 'Mensaje de prueba',

    });

    

  }

  addMessage(msg: Mensaje){

    this.mensajesDB.push(msg);

  }
}
