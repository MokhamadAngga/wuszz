import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../home/home';

@Component({
  selector: 'page-satuankonfirmasi',
  templateUrl: 'satuankonfirmasi.html',
})
export class SatuankonfirmasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  terimaSatuan() {
    this.navCtrl.push(HomePage);
  }

}
