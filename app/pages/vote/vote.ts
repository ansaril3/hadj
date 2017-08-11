import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {InAppBrowser} from 'ionic-native';

/*
  Generated class for the VotePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/vote/vote.html',
})
export class VotePage {
  platform: any;
  browser: any;
  url: string;

  constructor(private navCtrl: NavController, platform: Platform) {
    this.platform = platform;
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //   this.browser = new InAppBrowser();
      //   console.log('browser init');
    });

  }

  vote() {
    //   this.browser.open(
    //   this.browser.open();
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.url = 'market://details?id=com.almathuratrus';
        try {
          this.browser = InAppBrowser.open(this.url, '_system', 'location=yes');
        } catch (err) {
          this.url = 'https://play.google.com/store/apps/details?id=com.almathuratrus';
          this.browser = InAppBrowser.open(this.url, '_system', 'location=yes');
        }
      } else {
        this.url = 'itms-apps://itunes.apple.com/my/app/mathurat_rus/1179780695';
        try {
          this.browser = InAppBrowser.open(this.url, '_system', 'location=yes');
        } catch (err) { 
          this.url = 'https://itunes.apple.com/my/app/mathurat_rus/1179780695';
          this.browser = InAppBrowser.open(this.url, '_system', 'location=yes');
        } 
      }

    });
  }

}
