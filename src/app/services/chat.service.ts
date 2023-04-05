import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import * as firebase from 'firebase/compat';

export interface User {

  uid: string;
  email: string;
}

export interface Mensaje{

  id: string;
  from: string;
  to: string;
  msg: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
currentUser: User = {
  uid: '',
  email: ''
};

  constructor(private afAuth: AngularFireAuth) {
   }

   signIn(){
    let provider = new GoogleAuthProvider();
    return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {

    // The signed-in user info.
    let user = result.user;
    let name = user?.displayName;

    localStorage.setItem('user', JSON.stringify(name));
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    window.alert(error)
    // ...
  });
  }

   signOut(){
    return this.afAuth.signOut();
   }
}
