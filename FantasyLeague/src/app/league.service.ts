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
  testarr:Array<any>=[];

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

//
        this.db.collection("leagues").get().then(function(querySnapshot){
          querySnapshot.forEach(function(doc) {
            //console.log(doc.id);
            var invCode = doc.data();
            self.testarr.push(invCode.invCode);
            
            //test = doc.id;
    
    
          });
        }).catch(function(error) {
            alert(error.message);
            console.log("errors");
          });
  }

  createLeague(title){
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

            //update this products arrays
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


    }

  joinLeague(invCode){
      this.db.collection("leagues").where("invCode","==",invCode).get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          var code = doc.data().invCode;
          
          alert(code + " ~ Was this your card?");
          if(invCode != code){
            console.log(invCode);
          }
          console.log(code);
        });
      }).catch(function(error){

        //console.log("There is no league with that Invitation Code: " + error);
      });

      //alert(whichLeague + " ~ Was this your card?");
  }

  getItems(){
    //var self=this;
    var test;
    //var size = 0;
    console.log(this.testarr);

      /*for (let i = 0; i < self.testarr.length; i++) {
        console.log(self.testarr[i]);
      }
      //console.log(test);

    /*this.db.collection('leagues').get().then(snap => {
      size = snap.size // will return the collection size
      for (let i = 0; i < size; i++) {
        leagues.push(this.db.collection('leagues').get().
      }
    });
    */
    //alert(size);
    //  leagues = this.db.collection("leagues")
      return this.testarr;
  
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
