import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {KiloankonfirmasiPage} from "../confirm/kiloankonfirmasi/kiloankonfirmasi";

@Component({
  selector: 'page-kiloan',
  templateUrl: 'kiloan.html',
})
export class KiloanPage {

  public event = {
    month: '2015-12-19',
    timeStarts: '06:43',
    timeEnds: '2017-12-20'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  confirmKiloan(){
    this.navCtrl.push(KiloankonfirmasiPage)
  }

}
