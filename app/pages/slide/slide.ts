import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the SlidePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/slide/slide.html',
})
export class SlidePage {

  dua: any;
  isBusy: boolean;
  duaName: string;
  constructor(private navCtrl: NavController, navParams: NavParams) {
    this.dua = navParams.data;
    console.log( this.dua);
    this.isBusy = false;
  }




}



