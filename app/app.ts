import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar, Splashscreen } from 'ionic-native';
import {InfoPage} from './pages/info/info';
import {VotePage} from './pages/vote/vote';
import {UmraPage} from './pages/umra/umra';
import {HadjPage} from './pages/hadj/hadj';
import {DaysPage} from './pages/days/days';
import {DuaListPage} from './pages/dua-list/dua-list';
import {AudioProvider, WebAudioProvider} from 'ionic-audio/dist/ionic-audio';
import {Type, provide} from '@angular/core';


@Component({
  templateUrl: 'build/app.html',
  // providers: [DbService, AudioProvider]
  providers: []
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = UmraPage;
  pages: Array<{ title: string, component: any, logo: string }>;
  // dbService: any;
  isBusy: boolean;

  constructor(
    public platform: Platform,
    public menu: MenuController
  //  dbService: DbService
  ) {
    this.isBusy = true;
    this.initializeApp();
    // this.dbService = dbService;
    // set our app's pages
    this.pages = [
      { title: 'Подготовка', component: InfoPage, logo: 'book' },
      { title: 'Умра', component: UmraPage, logo: 'cloudy-night' },
      { title: 'Хадж', component: HadjPage, logo: 'cube' },
      { title: 'Важные дни', component: DaysPage, logo: 'calendar' }, 
      { title: 'Список молитв', component: DuaListPage, logo: 'chatboxes' },
      { title: 'Чат для паломников', component: InfoPage, logo: 'chatboxes' },
      { title: 'Информация', component: InfoPage, logo: 'information-circle' },
      { title: 'Оценить', component: VotePage, logo: 'thumbs-up' }
    ];
  }

  
  hideSplashScreen() {
    if (Splashscreen) {
      setTimeout(() => {
        Splashscreen.hide();
      }, 600);
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.hideSplashScreen();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.isBusy = false;
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [provide(AudioProvider,  { useFactory: AudioProvider.factory })], {
  // tabbarPlacement: 'bottom'
});