import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, Content } from 'ionic-angular';


import marked from 'marked';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  convert(this) {
    console.log(this.toggleVal);
    if(this.toggleVal==true){
      if(this.plainText && this.plainText!=''){
        let plainText = this.plainText

        this.markdownText = marked(plainText.toString())
        this.content = this.markdownText
      }else{
        this.toggleVal=false;
        let toast = this.toastCtrl.create({
		      message: 'User was added successfully',
		      duration: 3000
		    });
		    toast.present();
      }
    }
    
  }

}
