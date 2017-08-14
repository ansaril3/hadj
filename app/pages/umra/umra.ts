import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IhramPage } from '../../pages/ihram/ihram';
import { DuaPage } from '../../pages/dua/dua';
import { SlidePage } from '../../pages/slide/slide';
import { HadjPage } from '../../pages/hadj/hadj';
import { TawafPage } from '../../pages/tawaf/tawaf';
import { PrepPage } from '../../pages/prep/prep';
import { SaiPage } from '../../pages/sai/sai';

/*
  Generated class for the UmraPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/umra/umra.html',
})
export class UmraPage {

  constructor(private nav: NavController) {
    this.nav = nav;
  }
/*
    let dua = {
      name: '',
      arabic: '',
      addition: '',
      rus: '',
      trascription: ''
    };

    this.nav.push(DuaPage, dua);

    */

  openPreparation() {
    this.nav.push(PrepPage);
  }


  openIhram() {
    this.nav.push(IhramPage);
  }

  openTalbia() {
    let dua = {
      name: 'Тальбия',
      arabic: 'لبيك اللهم لبيك لبيك لا شريك لك لبيك إنالحمد والنعمة لك والملك لا شريك لك',
      addition: 'Тальбию произносят в течение путешествия. Мужчины - вслух, женщины - тихо. Достигнув заповедной территории Мекки и увидев дома Мекки, следует прекратить произносить тальбию.',
      rus: 'Вот я пред Тобой, о Аллах! Вот я пред Тобой! Вот я пред Тобой, и нет у Тебя сотоварища! Вот я пред Тобой! Поистине, Тебе надлежит похвала и Тебе принадлежит милость и владычество! Нету Тебя сотоварища!',
      trascription: 'Ляббай-ка Ллахумма ляббай-ка! Ляббай-ка ля шарика ля-ка ляббай-ка! Инна ль-хамда ва ни‘мата ля-ка ва-ль-мульк ля шарика ля-ка'
    };
    this.nav.push(DuaPage, dua);
  }

  openEnterMasjid() {
     let dua = {
      name: 'При входе в Заповедную мечеть',
      image: 'build/img/haramEnter.jpg',
      text: 'Войдя в Заповедную мечеть с правой ноги, скажите:<br>اللهم صل على محمد وسلم اللهم افتح لي أبوابرحمتك<br><i>Аллахумма, салли ‘аля Мухаммадин ва саллим! Аллахумма, ифтах ли абваба рахмати-ка!</i><br>О Аллах, благослови Мухаммада и ниспошли ему мир! О Аллах, открой для меня врата Своего милосердия!' };
    this.nav.push(SlidePage, dua);
  }

  openTawaf() {
    this.nav.push(TawafPage);
  }

  openIbrahim() {
   let dua = {
      name: 'Намаз 2 ракаата',
      image: 'build/img/ibrahim.jpg',
      text: 'Направьтесь к месту стояния Ибрахима и произнесите:<br>وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلّىً<br><i>Ва тахизу мим маками Ибрахима мусалля</i><br>«Изберите же место [стояния] Ибрахима местом моления» (сура 2 «Аль-Бакара = Корова», аят 125).<br>При возможности за местом стояния Ибрахима либо же в любом месте Заповедной мечети совершите два рак‘ата намаза. Желательно установить перед собой преграду так, чтобы между вами и этой преградой никто не проходил.<br>В первом рак‘ате после суры 1 «Аль-Фатиха = Открывающая» прочтите суру 109 «Аль-Кяфирун = Неверующие», а вовтором рак‘ате после суры «Аль-Фатиха» прочтите суру 112 «Аль-Ихляс = Очищение веры».<br>Завершив намаз, отправьтесь к источнику с водой Замзам.' };
    this.nav.push(SlidePage, dua);
  }

  openZamzam() {
   let dua = {
      name: 'Источник Замзам',
      image: 'build/img/zamzam.jpg',
      text: 'Выпейте воду и полейте её себе на голову. Возвратитесь к Чёрному камню, укажите на него рукой и произнесите такбир.' };
    this.nav.push(SlidePage, dua);
  }

  openSai() {
    this.nav.push(SaiPage);
  }


  openExitMasjid() {
    let dua = {
      name: 'При выходе из мечети',
      arabic: 'اللهم صل على محمد وسلم اللهم اني أسألك من فضلك',
      addition: 'Выйдите из Заповедной мечети с левой ноги, сказав данное дуа',
      rus: 'О Аллах, благослови Мухаммада и ниспошли ему мир! О Аллах, воистину, я прошуь Тебя о Милости Твоей!',
      trascription: 'Аллахумма, салли ‘аля Мухаммадин ва саллим! Аллахумма, инни ас’алю-ка мин фадли-ка!'
    };

    this.nav.push(DuaPage, dua);
  }

  openCut() {
     let dua = {
      name: 'Стрижка',
      image: 'build/img/cut.jpeg',
      text: 'Мужчина равномерно укорачивает волосы на своей голове либо обривает её, а женщина состригает локон величиной с треть пальца.<br><strong>Примечание</strong>. Приехавшим в хадж лучше укоротить волосы, если они не успеют отрасти после ‘умры до хаджа, так как бритьё головы совершается во время хаджа. Приехавшим совершить только ‘умру (без хаджа) лучше обрить голову.<br><strong>Полный выход из состояния ихрама</strong><br>На этом ‘умра заканчивается. Мужчина снимает одеяние ихрам. Ограничения, действовавшие в состоянии ихрама, сняты. Теперь следует дождаться времени начала хаджа — 8 числа месяца зу-ль-хиджжа.' };
    this.nav.push(SlidePage, dua);
  }


  openHadj() {
    this.nav.setRoot(HadjPage);
  }


}
