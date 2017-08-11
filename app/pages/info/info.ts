import {NavController, Platform} from 'ionic-angular';
import {Component} from '@angular/core';
// import { EmailComposer } from 'ionic-native';

/*
  Generated class for the InfoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/info/info.html',
})
export class InfoPage {
  mailText: any;
  platform: any;
  tmp: any;
  email:any;
  constructor(public nav: NavController, platform: Platform) {
    this.mailText = "";
    this.platform = platform;
   // console.log("mail init");
   this.email = {
            to: 'ansaril3g@gmail.com',
            attachments: [],
            subject: 'Al Mathurat Rus',
            body: this.mailText,
            isHtml: false
          };
  }


  sendMail() {
 /*   console.log("test mail");
    this.platform.ready().then(() => {
      console.log("platform.ready");

      EmailComposer.isAvailable().then((available: boolean) => {
        console.log(available);
        console.log("mail available");
        EmailComposer.open(this.email);

      });
    });

*/
  }

}
