import { Component } from '@angular/core';
import { App,NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the BPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-b',
  templateUrl: 'b.html',
})
export class BPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
  }
  goSub(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  
  ionViewDidLoad() {
    // 获取home中传入的对象：console.log(this.navParams.data);
    console.log(this.navParams.get('id'));
  }

}
