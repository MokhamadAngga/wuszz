import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SatuankonfirmasiPage } from '../confirm/satuankonfirmasi/satuankonfirmasi';

@Component({
  selector: 'page-satuan',
  templateUrl: 'satuan.html',
})
export class SatuanPage {

  public event = {
    month: '2015-12-19',
    timeStarts: '06:43',
    timeEnds: '2017-12-20'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirmSatuan(){
    this.navCtrl.push(SatuankonfirmasiPage)
  }

}
