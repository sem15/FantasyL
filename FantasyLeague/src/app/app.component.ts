import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';


var config = {
   apiKey: "AIzaSyA2H9gK5VdiNh1XH51pqZ8CtODjSrwgCSQ",
   authDomain: "fantasy-l-48e20.firebaseapp.com",
   databaseURL: "https://fantasy-l-48e20.firebaseio.com",
   projectId: "fantasy-l-48e20",
   storageBucket: "fantasy-l-48e20.appspot.com",
   messagingSenderId: "718482819499",
   appId: "1:718482819499:web:7112fc59c0344990ce2aee",
   measurementId: "G-30WS3K0927"
 };

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
      firebase.initializeApp(config);
  }
}
