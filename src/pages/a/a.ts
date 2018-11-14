import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SetPage } from '../set/set';

/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})
export class APage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goSub(){
    this.navCtrl.push(SetPage,{id:1});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad APage');
  }

}
