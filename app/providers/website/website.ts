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
  posts: any = null;
  comments: any = null;
  users: any = null;
  topics: any = null;
  voteResult: any;
  constructor(public http: Http) {
    
  }



  getVkPostById(id) {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'https://api.vk.com/method/wall.getById?posts=-77334796_' + id + '&v=5.53&oauth=1&access_token=d8d31e71d8d31e71d8d31e7183d89cfcd4dd8d3d8d31e7181bd7ec701c45d2fc1fb2e21';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.posts = data.response[0];
          resolve(this.posts);
        });
    });
  }

  getVkComments(id, count, offset) {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'https://api.vk.com/method/wall.getComments?owner_id=-77334796&post_id=' + id + '&count=' + count + '&offset=' + offset + '&need_likes=1&v=5.53&oauth=1&access_token=d8d31e71d8d31e71d8d31e7183d89cfcd4dd8d3d8d31e7181bd7ec701c45d2fc1fb2e21';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.comments = data.response;
          resolve(this.comments);
        });
    });
  }

  getVkUsers(ids) {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'https://api.vk.com/method/users.get?user_ids=' + ids + '&fields=photo_50,first_name,last_name&v=5.53&oauth=1&access_token=d8d31e71d8d31e71d8d31e7183d89cfcd4dd8d3d8d31e7181bd7ec701c45d2fc1fb2e21';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.users = data.response;
          resolve(this.users);
        });
    });
  }

  getVkWallPosts(count, offset) {
    // don't have the data yet
    return new Promise(resolve => {
      let url = 'https://api.vk.com/method/wall.get?owner_id=-77334796&count=' + count + '&offset=' + offset + '&v=5.53&oauth=1&access_token=d8d31e71d8d31e71d8d31e7183d89cfcd4dd8d3d8d31e7181bd7ec701c45d2fc1fb2e21';
      console.log(url);
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.posts = data.response;
          resolve(this.posts);
        });
    });
  }


}