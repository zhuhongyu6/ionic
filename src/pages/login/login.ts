import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { BPage } from '../b/b';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  modalCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }
  goTab(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
