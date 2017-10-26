import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    constructor(public afAuth: AngularFireAuth) { 

    }

    signUp(username, password){
        return this.afAuth.auth.createUserWithEmailAndPassword(username, password);
    }

    loginGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    loginFacebook() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    logout() {
        return this.afAuth.auth.signOut();
    }

}