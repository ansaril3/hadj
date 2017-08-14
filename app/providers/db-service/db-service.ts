import { Injectable } from '@angular/core';
import { Storage, SqlStorage } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the DbService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbService {
  storage: any;
  dbObject: any;
  constructor() {
    this.storage = new Storage(SqlStorage);
    // this.storage.query('CREATE TABLE IF NOT EXISTS list (id INTEGER PRIMARY KEY AUTOINCREMENT, duaName TEXT)');
    //  this.storage.query('CREATE TABLE IF NOT EXISTS dua (id INTEGER PRIMARY KEY AUTOINCREMENT, duaId INTEGER, ayatNumber INTEGER, arab TEXT, rus TEXT, transcription TEXT)');
    //  this.initDb();
    this.dbObject = [
       
        ]
    ;


  //  this.storage.set('obj', JSON.stringify(this.dbObject));

  }

  initDb() {
    console.log('INSERTING data...');
    //  let sql = 'INSERT INTO list (id, duaName) VALUES (1,Фатиха)';
    //   return this.storage.query(sql);
  }



  getList() {
    //   let sql = 'SELECT * FROM list';
    //   return this.storage.query(sql);
    return this.dbObject;
  }

  getNextDuaById(id) {
    id = id + 1;
    if (id === 27) { id = 0; }
    return this.dbObject[id];
  }


}

