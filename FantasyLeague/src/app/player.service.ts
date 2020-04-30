import { Injectable, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  param:any
  private eventSubject=new Subject<any>();
  playerlist:Array<any>=[];
  list:any;
  db=firebase.firestore();

  //event notification
  publishEvent(data: any) {
    this.eventSubject.next(data);
}
getObservable(): Subject<any> {
    return this.eventSubject;
}


  constructor(public router:Router,)
  {
      var self=this;

      this.db.collection("players").where("id", "==", "j0Et3WoohXWTyRp54wP3")
       .onSnapshot(function(querySnapshot) {
             self.playerlist = [];
             querySnapshot.forEach(function(doc) {
                 var player = doc.data();
                 self.playerlist.push({id:player.id,playerslist:player.playersList})
                 self.list=player.playersList;
             });

             self.publishEvent({
                 foo: 'bar'
             });

             console.log("items reloaded");
         });
  }

  getPlayers():any{
    var playersObservable=new Observable(observer =>{
      setTimeout(()=>{
        observer.next(this.playerlist);
      },1000);
    })
    return playersObservable;
  }

  sendToRoster(ign1, ign2, ign3, ign4, ign5) {

  }

  updatePlayers() {
    var self=this;

    this.db.collection("players").where("id", "==", "j0Et3WoohXWTyRp54wP3")
     .onSnapshot(function(querySnapshot) {
           self.playerlist = [];
           querySnapshot.forEach(function(doc) {
               var player = doc.data();
               self.playerlist.push({id:player.id,playerslist:player.playerlist})
           });

           self.publishEvent({
               foo: 'bar'
           });

           console.log("items reloaded");
       });
  }

}



export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.id = childSnapshot.key;
      // console.log(item);
      returnArr.push(item);
  });

  return returnArr;
}
