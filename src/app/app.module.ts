import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list'
import { IndexPage } from '../pages/index/index';
import { RegisterPage } from '../pages/register/register';
import { SatuanPage } from '../pages/satuan/satuan';
import { KiloanPage } from '../pages/kiloan/kiloan';
import { KiloankonfirmasiPage } from '../pages/confirm/kiloankonfirmasi/kiloankonfirmasi';
import { SatuankonfirmasiPage } from '../pages/confirm/satuankonfirmasi/satuankonfirmasi';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    RegisterPage,
    SatuanPage,
    KiloanPage,
    KiloankonfirmasiPage,
    SatuankonfirmasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    RegisterPage,
    SatuanPage,
    KiloanPage,
    KiloankonfirmasiPage,
    SatuankonfirmasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
