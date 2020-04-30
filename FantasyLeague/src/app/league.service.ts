import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';


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
  myrosters: any;
  currentlist:Array<any>=[];
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
                  self.currentlist=[];
                  for (let i = 0; i < self.leagues.length; i++){
                    for (let j = 0; j < self.leagues[i].rosters.length; j++){
                      console.log(self.leagues[i].rosters.length + " Current Roster length");
                      if(firebase.auth().currentUser.uid == self.leagues[i].rosters[j].uid){
                        self.currentlist.push(self.leagues[i]);
                      }
                    }
                  }
                  console.log(self.currentlist);

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
            self.testarr.push(doc.data());
            
            //test = doc.id;
    
    
          });
        }).catch(function(error) {
            alert(error.message);
            console.log("errors");
          });

  }
  refresh(){
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


  createLeague(title,roster, randId){


      var self=this;
      var uid=null;


      var db = firebase.firestore();
      var newLeague=db.collection("leagues").doc();
      let data={
        'Title':title,
        'invCode':randId,
      }
      console.log(data.Title);
      console.log(data.invCode);
      newLeague.set(data);
      this.id=newLeague.id;
      this.rosterName=roster;
      console.log(this.rosterName);
      console.log(this.id);
      // db.collection("leagues").add({
      //   'Title': title,
      //   'invCode': randId
      //   })
      //   .then(function(docRef) {
      //       console.log("Document written with ID: ", docRef.id);
      //       this.id = docRef.id;
      //       console.log(docRef.id);
      //       this.rosterName = roster;



      //   })
      //   .catch(function(error) {
      //       console.error("Error adding document: ", error);
      //   });

        //db.collection("Users").id;


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
            'rosterid':newValues.rid,
            'teamName':newValues.Team,
            'uid':firebase.auth().currentUser.uid,
          });
          let leagueValues={
            invCode:newValues.invCode,
            rosters:rosterslist
          };

          console.log(leagueValues);
          console.log(id);
          setTimeout(() => {
            db.collection("leagues").doc(id).update(leagueValues).then(function(){
              console.log("Document successfully updated");
              console.log("Item updated:"+newValues);
              self.refresh();
            }).catch(function(error){
              console.error("error removing document: ",error);
            });
          }, 1000);


        });
      }).catch(function(error){

        //console.log("There is no league with that Invitation Code: " + error);
      });

      //alert(whichLeague + " ~ Was this your card?");
  }


  initLeague(newValues) {
    console.log(newValues.invCode);
    var self=this;
    var db=firebase.firestore();
      db.collection("leagues").where("invCode","==",newValues.invCode).get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
          var id=doc.id;
          let rosterslist:Array<any>=[];

          rosterslist.push({
            'rosterid':newValues.rid,
            'teamName':newValues.Team,
            'uid':firebase.auth().currentUser.uid,
          });
          let leagueValues={
            invCode:newValues.invCode,
            rosters:rosterslist
          };

          db.collection("leagues").doc(id).update(leagueValues).then(function(){
            console.log("Document successfully updated");
            console.log("Item updated:"+newValues);
            self.refresh();
          }).catch(function(error){
            console.error("error removing document: ",error);
          });

        });
      }).catch(function(error){

        //console.log("There is no league with that Invitation Code: " + error);
      });
  }


  getLeagues(){
    //var self=this;
    var allLeagues = this.testarr;
    console.log(allLeagues);
    //var size = 0;
    //console.log(this.testarr);

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
      return allLeagues;
  
  }

  /*getLeagues():any{
    var LeagueObservable = new Observable(observer => {
      setTimeout(() => {
          observer.next(this.leagues);
      }, 1000);
    });
    return LeagueObservable;
  }*/

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
