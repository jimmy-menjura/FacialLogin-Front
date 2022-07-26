import { Injectable } from '@angular/core';
import {AlertController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alert: AlertController) { }
 async  presentAlert(header,subHeader,message){
    const alert = await this.alert.create({
      header:header,
      subHeader:subHeader,
      message: message,
      buttons:["ok"]
    })
    await  alert.present();
  }

}
