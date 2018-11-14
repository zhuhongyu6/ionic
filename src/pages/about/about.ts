import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  isActive=0;
  arr=['客厅','卧室','餐厅','书房','门厅'];
  isClick(i){
    this.isActive=i;
  }
  constructor(public navCtrl: NavController) {
  }
  change(){
    console.log(this.slides.getActiveIndex());
  }
  ionViewDidLoad() {
    //console.log(this.slides.getActiveIndex());
  }
}
