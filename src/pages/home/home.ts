import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('ac') ac;
  items=[];
  isActive=0;
  arr=['推荐','家居','餐厨','床上用品'];
  isClick(i){
    this.isActive=i;
  }
  constructor(public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  goSub(){
    this.navCtrl.push(BPage,{id:1});
  }

  // ionViewDidLoad(){
  //   this.ac.get();
  // }
  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })

  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     for (let i = 0; i < 30; i++) {
  //       this.items.push( this.items.length );
  //     }

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //     if(this.items.length>40){
  //       infiniteScroll.enable();
  //     }
  //   }, 500);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
