import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { CPage } from '../c/c';
import { ModalController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = APage;
  tab5Root = CPage;


  constructor(public modalCtrl: ModalController) {

  }
  ionViewDidLoad(){
  //   document.querySelector('#tab-t0-2').addEventListener('click',()=>{
  //     let contactModal = this.modalCtrl.create(AddPage);
  //     contactModal.present();
  //   },false)
  // }
    if(document.querySelector('#tab-t0-2')){
      document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal=this.modalCtrl.create(AddPage);
      profileModal.present();
      },false)
    }
  }
}
