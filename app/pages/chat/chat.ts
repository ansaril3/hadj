import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ChatPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/chat/chat.html',
})
export class ChatPage {

  chatsShow: boolean;
  constructor(private navCtrl: NavController) {
    this.chatsShow = false;
  }

}
