import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  param:any;
  id:any;
  private eventSubject=new Subject<any>();
  db=firebase.firestore();
  leagues:Array<any>=[];
  rosterName:any;


  //event notification
  publishEvent(data: any) {
    this.eventSubject.next(data);
}
  getObservable(): Subject<any> {
    return this.eventSubject;
}

  constructor() {
    var self=this;
   //load products from db
       this.db.collection("leagues")
       .onSnapshot(function(querySnapshot) {
            self.leagues = [];
            querySnapshot.forEach(function(doc) {
                var league = doc.data();
                // console.log(doc.id)
                self.leagues.push({Title:league.Title, invCode: league.invCode, pool:league.pool,
                  rosters:league.rosters})
            });
             self.publishEvent({
                foo: 'bar'
            });
            console.log("leagues loaded");
        } );
  }

  createLeague(title,roster){
      var self=this;
      var uid=null;


      var db = firebase.firestore();
      let randId =  Math.random().toString(36).substr(2, 5);
      db.collection("leagues").add({
        'Title': title,
        'invCode': randId
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            self.id = docRef.id;
            self.rosterName = roster;
            //update this products arrays
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


    }

  joinLeague(newValues){
    console.log(newValues.invCode);
    var self=this;
    var db=firebase.firestore();
      db.collection("leagues").where("invCode","==",newValues.invCode).get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          var id=doc.id;
          let rosterslist=doc.data().rosters;

          rosterslist.push({
            'teamName':newValues.Team,
            'uid':firebase.auth().currentUser.uid,
            'rosterid':id
          });
          let leagueValues={
            invCode:newValues.invCode,
            rosters:rosterslist
          };

          db.collection("leagues").doc(id).update(leagueValues).then(function(){
            console.log("Document successfully updated");
            console.log("Item updated:"+newValues);
          }).catch(function(error){
            console.error("error removing document: ",error);
          });
          
        });
      }).catch(function(error){

        //console.log("There is no league with that Invitation Code: " + error);
      });

      //alert(whichLeague + " ~ Was this your card?");
  }

  getItems(){
      return this.leagues;
  }

  getLeagues():any{
    var LeagueObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.leagues);
      }, 1000);
    });
    return LeagueObservable;
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

