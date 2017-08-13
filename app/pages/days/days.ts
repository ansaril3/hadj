import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HadjPage } from '../../pages/hadj/hadj';
import { UmraPage } from '../../pages/umra/umra';

/*
  Generated class for the DaysPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/days/days.html',
})
export class DaysPage {

  constructor(private nav: NavController) {
    this.nav = nav;
  }



  openHadj() {
    this.nav.push(HadjPage);
  }


  openUmra() {
    this.nav.push(UmraPage);
  }



}
