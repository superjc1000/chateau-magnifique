import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.afAuth.onAuthStateChanged(user => {
      console.log('Changed: ', user);
      // this.currentUser = user;
    });
   }

   async signUp(email: string, password: string){
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log('resultado: ', credential);
    const uid = credential.user!.uid;
    let provider = new GoogleAuthProvider();
    this.afAuth
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
    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user!.email,
    });

   }

   signIn(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email,password);
   }

   signOut(){
    return this.afAuth.signOut();
   }
}
