import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
//import cors = require('cors');
/*
  Generated class for the Website provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Website {
  data: any = null;
  operators: any = null;
  constructor(public http: Http) {
    
  }



  getListOperators() {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'http://medicine-live.ru/api/topic/read/?id=2594&fields=topic_text&response_type=json';
   // let url = 'http://medicine-live.ru/api/comment/list/?type=topic&response_type=json&fields=comment_id,comment_text,comment_date,comment_rating,user[user_login,user_id,user_profile_name,user_profile_avatar]&id=25';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.operators = data.response.topic_text;
          resolve(this.operators);
        });
    });
  }

    getAds() {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'http://medicine-live.ru/api/topic/read/?id=2595&fields=topic_text&response_type=json';
   // let url = 'http://medicine-live.ru/api/comment/list/?type=topic&response_type=json&fields=comment_id,comment_text,comment_date,comment_rating,user[user_login,user_id,user_profile_name,user_profile_avatar]&id=25';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.operators = data.response.topic_text;
          resolve(this.operators);
        });
    });
  }


}